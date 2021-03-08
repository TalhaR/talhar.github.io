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
    },
    text: {
        textAlign: "right",
        paddingRight: '5%',
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <Grid container className={classes.footerContainer} component="footer">
            <Grid item xs className={classes.icons}>
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
            <Grid item xs={6} className={classes.text}>
                <Typography variant="subtitle1">© Talha Rahman </Typography>
            </Grid>
        </Grid>
    );
}
