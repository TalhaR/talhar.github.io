import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: '7.5% 0%',
    },
    aboutText: {
        justifyContent: 'center',
        textAlign: 'center',
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            margin: '1% 0%',
        },
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <Grid container className={classes.aboutContainer}>
            <Grid item style={{textAlign: '-webkit-center'}}>
                <Typography variant="h1">
                    Talha Rahman
                </Typography>
                <br />
                <Typography variant="h2">
                    <small> Student Software Developer </small>
                </Typography>
                <br />
                <Typography variant="body1" className={classes.aboutText}>
                    I am a senior computer science major at Hunter College. I try my best to write code that runs without complier errors. Check more about me and some projects I am working on below.
                </Typography>
            </Grid>
        </Grid>
    )
}
