import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import ProjectCard from './ProjectCard'
import { projects } from './constants'

const useStyles = makeStyles((theme) => ({
    projectsContainer: {
        textAlign: 'center',
        justifyContent: 'space-evenly',
        margin: '5% 0%',
        [theme.breakpoints.up("lg")] : {
            margin: '3% 0%'
        }
    },
    header: {
        marginBottom: '5%',
        [theme.breakpoints.up("md")]: {
            marginBottom: '3%',
        }
    }
}));

export default function Projects() {
    const classes = useStyles();

    const getProjectCards = (projects) => {
        return projects.map((project) => {
            return <ProjectCard {...project} />
        })
    } 

    return (
        <Grid container className={classes.projectsContainer} id="projects" spacing={2}>
            <Grid item xs={12} className={classes.header}>
                <Typography variant="h2">
                    Projects
                </Typography>
            </Grid>
            { getProjectCards(projects)}
        </Grid>
    )
}
