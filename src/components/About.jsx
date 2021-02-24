import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    },
    aboutText: {
        [theme.breakpoints.up('sm')]: {
            margin: '1% 25%',
        },
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <Grid container className={classes.aboutContainer}>
            <Grid item>
                <Typography variant="h1">
                    Talha Rahman
            </Typography>
                <br />
                <Typography variant="h2">
                    <small> Student Software Developer </small>
                </Typography>
                <br />
                <Typography variant="body1" className={classes.aboutText}>
                    I am a senior computer science major at Hunter College. I try my best to write code that runs without complier errors. You can check more about me or some of the projects I am working on below.
            </Typography>

            </Grid>
        </Grid>
    )
}
