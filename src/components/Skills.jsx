import { Button, Paper, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { faCuttlefish, faPython, faSwift, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import SkillCard from './SkillCard'

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: '#0a254a',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px'
    },
    skillsContainer: {
        textAlign: 'center',
        height: '400px',
        justifyContent: 'space-around',
    },
    languageSkills: {
        justifyContent: 'space-evenly',
    },
    
}));

export default function Skills() {
    const classes = useStyles();

    return (
        <Grid container item xs={12} className={classes.section}>
            <Grid item xs={12} md={9} lg={6} container  direction="column" className={classes.skillsContainer}>
                <Grid item >
                    <Typography variant="h2">
                        Skills
                    </Typography>
                </Grid>
                <Grid item >
                    <ButtonGroup>
                        <Button color="inherit">Languages</Button>
                        <Button color="inherit">Tools</Button>
                    </ButtonGroup>
                </Grid>
                <Grid container item className={classes.languageSkills}>
                    <SkillCard icon={faCuttlefish} name="C++" />
                    <SkillCard icon={faJava} name="Java" />
                    <SkillCard icon={faPython} name="Python" />
                    <SkillCard icon={faSwift} name="Swift" />
                    <SkillCard icon={faJs} name="Javascript" />
                </Grid>
            </Grid>
        </Grid>
    )
}
