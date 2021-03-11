import stars from '../img/stars.jpg'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    headerContainer: {
        position: 'relative',
    },
    headerText: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top: '25%',
        [theme.breakpoints.up('sm')]: {
            top: '50%',
        }
    },
    headerImage: {
        width: '100%',
        maxHeight: '900px'
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <Grid container component="header" className={classes.headerContainer}>
            <Grid item xs={12}>
                <img className={classes.headerImage} src={stars} alt="stars" />
                <Typography variant="h2" className={classes.headerText}>
                    今日は
                </Typography>
            </Grid>
        </Grid>
    )
}
