import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircleIcon from '@mui/icons-material/Circle';
import { withRouter } from 'react-router-dom';

const drawerWidth = 175;

const ResponsiveDrawer = props => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { history } = props
    const itemsList = [
        {
            text: 'Feedback',
            icon: <CircleIcon />,
            onClick: () => history.push('/')
        },
        {
            text: 'Review',
            icon: <CircleIcon />,
            onClick: () => history.push('/review')
        },
        {
            text: 'Submit',
            icon: <CircleIcon />,
            onClick: () => history.push('/submit')
        }]

    const itemsListLower = [
        {
            text: 'Feedback Results',
            icon: <CircleIcon />,
            onClick: () => history.push('/feedbackResults')
        }]

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem key={text} disablePadding >
                            <ListItemButton onClick={onClick}>
                                <ListItemIcon>
                                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
            <List>
                {itemsListLower.map((item, index) => {
                    const { text, icon, onClick } = item;
                    return (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={onClick}>
                            <ListItemIcon>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                )})}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withRouter(ResponsiveDrawer);