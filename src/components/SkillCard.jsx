import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: "2rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "2.5rem",
        },
    },
    caption: {},
    skillCard: {
        fontSize: "1.15rem",
        width: "75px",
    },
}));

export default function SkillCard({icon, name, extra}) {
    const classes = useStyles();

    return (
        <Grid item className={classes.skillCard}>
            <div>
                <FontAwesomeIcon className={classes.icon} icon={icon} />{" "}
                {extra}
            </div>
            <div style={{ marginTop: "15px" }}>
                <Typography className={classes.caption} variant="subtitle1">
                    {name}
                </Typography>
            </div>
        </Grid>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.object.isRequired,
    name: PropTypes.string,
};
