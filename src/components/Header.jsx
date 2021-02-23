import React from 'react'
import Grid from '@material-ui/core/Grid'
import stars from '../img/stars.jpg'
import '../index.css'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    headerImage: {
        maxWidth: '100%'
    },
});

export default function Header() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <header>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <img className={classes.headerImage} src={stars} alt="header" />
                    </Grid>
                </Grid>
            </header>
        </React.Fragment>
    )
}

