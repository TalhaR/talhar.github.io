import { useState } from "react";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SkillCard from "./SkillCard";
import { languages, tools } from "./constants";

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundColor: theme.palette.secondary.main,
        justifyContent: "center",
        alignItems: "center",
    },
    skillsContainer: {
        textAlign: "center",
        height: "375px",
        alignContent: "space-evenly",
        [theme.breakpoints.up("sm")]: {
            height: "400px",
        },
    },
    displaySkills: {
        "& > *": {
            margin: theme.spacing(1),
        },
        justifyContent: "space-evenly",
    },
}));

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText("#1f2020"),
        backgroundColor: "#1f2020",
        "&:hover": {
            backgroundColor: "#1f2121",
        },
    },
}))(Button);

export default function Skills() {
    const classes = useStyles();
    const [showLanguages, setShowLanguages] = useState(true);

    const getIconsList = (listObj) => {
        return <SkillCard {...listObj} />;
    };

    const displayList = (list) => {
        return list.map((listObj) => getIconsList(listObj));
    };

    return (
        <Grid item xs={12} id="skills" className={classes.section} component="section">
            <Grid container className={classes.skillsContainer}>
                <Grid item xs={12}>
                    <Typography variant="h2">Skills</Typography>
                </Grid>
                <Grid item xs={12}>
                    <ButtonGroup>
                        <ColorButton onClick={() => setShowLanguages(true)}>
                            Languages
                        </ColorButton>
                        <ColorButton onClick={() => setShowLanguages(false)}>
                            Technology
                        </ColorButton>
                    </ButtonGroup>
                </Grid>
                <Grid container item xs={12} className={classes.displaySkills}>
                    { displayList(showLanguages ? languages : tools) }
                </Grid>
            </Grid>
        </Grid>
    );
}
