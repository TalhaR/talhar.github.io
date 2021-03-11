import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import resume from "../resources/Resume.pdf";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        justifyContent: "center",
        [theme.breakpoints.up("lg")]: {
            height: "75px",
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    mobileMenuItem: {
        color: "inherit",
        textDecoration: "none",
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <a
                    href="#skills"
                    className={classes.mobileMenuItem}
                    onClick={handleMobileMenuClose}
                >
                    <p>Skills</p>
                </a>
            </MenuItem>
            <MenuItem>
                <a
                    href="#projects"
                    className={classes.mobileMenuItem}
                    onClick={handleMobileMenuClose}
                >
                    <p>Projects</p>
                </a>
            </MenuItem>
            <MenuItem>
                <a
                    href="#contact"
                    className={classes.mobileMenuItem}
                    onClick={handleMobileMenuClose}
                >
                    <p>Contact</p>
                </a>
            </MenuItem>
            <MenuItem>
                <a
                    href="https://github.com/TalhaR/TalhaR/blob/main/Resume.pdf"
                    target="blank"
                    className={classes.mobileMenuItem}
                    onClick={handleMobileMenuClose}
                >
                    <p>Resume</p>
                </a>
            </MenuItem>
        </Menu>
    );

    const scrollToLocation = (location) => {
        const element = document.getElementById(location);
        window.scrollTo(0, element.offsetTop);
    }

    return (
        <nav className={classes.root}>
            <AppBar position="static" color="secondary" className={classes.nav}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Talha
                    </Typography>

                    <div className={classes.sectionDesktop}>
                        <Button color="inherit" onClick={() => scrollToLocation('skills')} >
                            Skills
                        </Button>
                        <Button color="inherit" onClick={() => scrollToLocation('projects')}>
                            Projects
                        </Button>
                        <Button color="inherit" onClick={() => scrollToLocation('contact')}>
                            Contact
                        </Button>
                        <Button
                            color="inherit"
                            href={resume}
                            download="Resume.pdf"
                        >
                            Resume
                        </Button>
                    </div>

                    <div className={classes.sectionMobile}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
        </nav>
    );
}
