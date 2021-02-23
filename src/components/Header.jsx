import React from 'react'
import Grid from '@material-ui/core/Grid'
import stars from '../img/stars.jpg'
import '../index.css'

export default function Header() {
    return (
        <React.Fragment>
            <header>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <img id="header-img" src={stars} alt="header" />
                    </Grid>
                </Grid>
            </header>
        </React.Fragment>
    )
}

