import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Paper  from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    skillsContainer: {
        textAlign: 'center',
        marginBottom: '5%',
        backgroundColor: '#0B46A7',
        height: '500px',
    },
    aboutText: {
        [theme.breakpoints.up('sm')]: {
            margin: '1% 25%',
        },
    }
}));

export default function Skills() {
    const classes = useStyles();

    return (
        <Grid container className={classes.skillsContainer} spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h2">
                    Skills
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <ButtonGroup>
                    <Button color="inherit">Skills</Button>
                    <Button color="inherit">Tools</Button>
                </ButtonGroup>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
            <Grid item xs={2}>
                <Paper> 
                    <FontAwesomeIcon icon={faCoffee}/><br/>
                    Test 
                </Paper>
            </Grid>
        </Grid>
    )
}
