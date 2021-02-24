import React from 'react'
import Grid from '@material-ui/core/Grid'
import stars from '../img/stars.jpg'
import '../index.css'
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        position: 'relative',
        marginBottom: '5%',
    },
    headerText: {
        position: 'absolute',
        color: 'white',
        width: '100%',
        textAlign: 'center',
        top: '25%',
        [theme.breakpoints.up('sm')]: {
            top: '50%',
        }
    },
    headerImage: {
        width: '100%',
        height: 'auto',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <header>
            <Grid container className={classes.headerContainer}>
                <Grid item xs={12}>
                    <img className={classes.headerImage} src={stars} alt="stars" />
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2" className={classes.headerText}>
                            今日は
                        </Typography>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </header>
    )
}

