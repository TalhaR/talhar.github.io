import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Typography } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        alignItems: "center",
        backgroundColor: theme.palette.primary.dark,
    },
    icons: {
        justifyContent: "center",
        textAlign: "center",
        // [theme.breakpoints.up('sm')]: {
        //     margin: '1% 0%',
        // },
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer>
            <Grid container className={classes.footerContainer}>
                <Grid item xs={4} className={classes.icons}>
                    <IconButton
                        href="https://www.linkedin.com/in/talha-rahman"
                        target="_blank"
                        aria-label="Linkedin"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        href="https://www.github.com/talhar"
                        target="_blank"
                        aria-label="Github"
                    >
                        <GitHubIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={8} style={{ textAlign: "right" }}>
                    <Typography variant="h6">{/* Talha */}</Typography>
                </Grid>
            </Grid>
        </footer>
    );
}
