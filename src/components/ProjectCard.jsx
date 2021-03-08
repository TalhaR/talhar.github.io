import { makeStyles } from '@material-ui/core/styles'
import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    cardContainer: {
    },
    media: {
        paddingTop: '56.25%'
    },
    featuresContainer: {
        paddingTop: '1%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    footer: {
        borderTop: '3px solid black',
        justifyContent: 'center',
    }
}));

function ProjectCard({title, img, desc, features, link, link2}) {
    const classes = useStyles();

    const getFeatures = (featuresList) => {
        return featuresList.map((feature) => {
            return <Chip key={feature} label={feature} color="primary" />
        });
    }

    return (
        <Grid item xs={10} sm={9} lg={5} 
            style={{paddingBottom: '5%'}}>
            <Card className={classes.cardContainer}>
                <CardMedia className={classes.media} 
                image={ img }/>
                <CardContent>
                    <Typography variant="h4" component="h2" style={{paddingBottom: '2%'}}>
                        { title }
                    </Typography>
                    <Typography variant="body1" component="p">
                        { desc }
                    </Typography>
                    <div className={classes.featuresContainer}>
                        { getFeatures(features) }
                    </div>
                </CardContent>
                <CardActions className={classes.footer}>
                    { link2 &&
                        <Button href={link2} target="_blank">
                            Website
                        </Button>
                    }
                    
                    <Button href={`https://github.com/TalhaR/${link}`} target="_blank">
                        Github
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard
