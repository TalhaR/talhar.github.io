import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { faCuttlefish, faPython, faSwift, faJava, faJs } from "@fortawesome/free-brands-svg-icons";
import SkillCard from './SkillCard'

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: theme.palette.secondary.main,
        justifyContent: 'center',
        alignItems: 'center',
        // color: '#e5e0d8',
    },
    skillsContainer: {
        textAlign: 'center',
        height: '400px',
        alignContent: 'space-evenly',
    },
    languageSkills: {
        justifyContent: 'space-evenly',
    },
}));

export default function Skills() {
    const classes = useStyles();

    return (
        <Grid item xs={12} className={classes.section}>
            <Grid container className={classes.skillsContainer}>
                <Grid item xs={12}>
                    <Typography variant="h2">
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup>
                        <Button color="inherit">Languages</Button>
                        <Button color="inherit">Tools</Button>
                    </ButtonGroup>
                </Grid>
                <Grid container item xs={12} className={classes.languageSkills}>
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
