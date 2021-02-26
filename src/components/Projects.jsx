import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    projectsContainer: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: '5% 0%',
    },
    // aboutText: {
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     width: '50%',
    //     [theme.breakpoints.up('sm')]: {
    //         margin: '1% 0%',
    //     },
    // }
}));

export default function Projects() {
    const classes = useStyles();

    return (
        <Grid container className={classes.projectsContainer} id="projects">
            <Grid item>
                <Typography variant="h2">
                    Projects
                </Typography>
                
            </Grid>
        </Grid>
    )
}
