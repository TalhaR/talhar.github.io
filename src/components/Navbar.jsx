import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        }
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => { setMobileMoreAnchorEl(event.currentTarget); }

    const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null); }

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} id={mobileMenuId} keepMounted
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen} onClose={handleMobileMenuClose}
            >
            <MenuItem>
                <p>Skills</p>
            </MenuItem>
            <MenuItem>
                <p>Projects</p>
            </MenuItem>
            <MenuItem>
                <p>Contact</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Talha
                    </Typography>

                    <div className={classes.sectionDesktop}>
                        <Button color="inherit">Skills</Button>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">Contact</Button>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    );
}
