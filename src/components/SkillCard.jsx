import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: '2rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5rem'
        },
    },
    caption: {
        // TODO Responsive Text
    },
    skillCard: {
        fontSize: '1.15rem'
    }
}));

export default function SkillCard(props) {
    const classes = useStyles();

    return (
        <Grid item className={classes.skillCard}>
            <div>
                <FontAwesomeIcon className={classes.icon} icon={props.icon}/> {props.extra}
            </div>
            <div style={{marginTop: '15px'}}>
                <Typography className={classes.caption} variant="subtitle1">
                    {props.name}
                </Typography>
            </div>
        </Grid>
    )
}

SkillCard.propTypes = {
    icon: PropTypes.object.isRequired,
    name: PropTypes.string
}


