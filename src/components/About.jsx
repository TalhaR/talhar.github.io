import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
        textAlign: "center",
        justifyContent: "center",
        margin: "4% 0%",
        [theme.breakpoints.up("xl")]: {
            margin: "3% 0%",
        },
    },
    aboutText: {
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.up("sm")]: {
            margin: "1% 0%",
        },
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.aboutContainer}
            component="section"
            spacing={3}
        >
            <Grid item xs={12}>
                <Typography variant="h1">Talha Rahman</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h2">
                    <small> Student Software Developer </small>
                </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={4} className={classes.aboutText}>
                <Typography variant="body1">
                    I am a senior computer science major at Hunter College. I
                    try my best to write code that runs without complier errors.
                    Check more about me and some projects I am working on below.
                </Typography>
            </Grid>
        </Grid>
    );
}
