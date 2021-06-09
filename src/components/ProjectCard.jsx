import { makeStyles } from "@material-ui/core/styles";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    Grid,
    Typography,
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        // transition: 'transform .2s cubic-bezier(.34,2,.6,1),box-shadow .2s ease'
    },
    media: {
        paddingTop: "56.25%",
    },
    featuresContainer: {
        paddingTop: "1%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    footer: {
        borderTop: "3px solid black",
        justifyContent: "space-evenly",
    },
}));

function ProjectCard({ title, img, desc, features, link, link2 }) {
    const classes = useStyles();
    const [raised, setRaised] = useState(false);

    const getFeatures = (featuresList) => {
        return featuresList.map((feature) => {
            return <Chip key={feature} label={feature} color="primary" />;
        });
    };

    const toggleRaise = () => setRaised(!raised);

    return (
        <Grid item xs={10} sm={9} lg={5} style={{ paddingBottom: "5%" }}>
            <Card
                className={classes.cardContainer}
                onMouseOver={() => toggleRaise()}
                onMouseOut={() => toggleRaise()}
                raised={raised}
            >
                <CardMedia className={classes.media} image={img} />
                <CardContent>
                    <Typography variant="h4" component="h2" style={{ paddingBottom: "2%" }}>
                        {title}
                    </Typography>
                    <Typography variant="body1" component="p">
                        {desc}
                    </Typography>
                    <div className={classes.featuresContainer}>
                        { getFeatures(features) }
                    </div>
                </CardContent>
                <CardActions className={classes.footer}>
                    {link2 && (
                        <Button href={link2} target="_blank">
                            Website
                        </Button>
                    )}

                    <Button
                        href={link}
                        target="_blank"
                    >
                        Github
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ProjectCard;
