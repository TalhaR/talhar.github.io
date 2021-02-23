import Typography  from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    aboutContainer: {
        textAlign: 'center',
        justifyContent: 'center',
    },
});

export default function About() {
    const classes = useStyles();

    return (
        <Grid container className={classes.aboutContainer}>
            <Grid item >
                <Typography variant="h1">
                    Talha Rahman
                </Typography>
            </Grid>
        </Grid>
    )
}
