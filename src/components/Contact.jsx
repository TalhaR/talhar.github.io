import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Button, Grid, Snackbar, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        justifyContent: 'center',
        height: '425px',
        backgroundColor: theme.palette.secondary.main,
    },
    formContainer: {
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center', 
        padding: '5% 0%',
        [theme.breakpoints.up("lg")]: {
            padding: '3% 0%',
        }
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    regularInputs: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '46%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '35ch',
        }
    },
    message: {
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '95%',
        },
        [theme.breakpoints.up('md')]: {
            width: '94%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
        }
    }
}));

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
    },
})(TextField);

export default function Contact() {
    const classes = useStyles();
    const [SenderEmail, setSenderEmail] = useState(null);
    const [Name, setName] = useState(null);
    const [Message, setMessage] = useState(null);
    const [ShowPopup, setShowPopup] = useState(false);

    function handleSubmit(event) {
        event.preventDefault(); 
        window.Email.send({ 
            SecureToken : "eec5684e-13e1-4c00-ae1b-533b7fc7b9ae".toUpperCase(),
            To: "delta.talha@gmail.com", 
            From: "trpricetracker@gmail.com", 
            Subject: "Portfolio Contact", 
            Body: `From: ${Name}\nEmail: ${SenderEmail}\n Message: ${Message}`
        }) 
        .then(function (message) { 
            setShowPopup(true);
            let form = document.getElementById('form');
            form.reset();
        });
    }

    return (
        <Grid container id="contact" className={classes.contactContainer} component="section">
            <Grid item xs={10} lg={6} className={classes.formContainer}>
                <Typography variant="h2" className={classes.header}>
                    Contact
                </Typography>
                <form id="form" className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <CssTextField required label="Name" variant="outlined" className={classes.regularInputs} onInput={(e) => setName(e.target.value)} />
                        <CssTextField label="Email" variant="outlined" className={classes.regularInputs}  onInput={(e) => setSenderEmail(e.target.value)}/>
                    </div>
                    <div>
                    <CssTextField required label="Message" multiline rows={4} variant="outlined" className={classes.message}  onInput={(e) => setMessage(e.target.value)}/>
                    </div>
                    <div style={{textAlign: 'center', width: '100%'}}>
                        <Snackbar open={ShowPopup} autoHideDuration={3000} onClose={(e) => setShowPopup(false)}>
                            <Alert onClose={(e) => setShowPopup(false)} severity="success">
                                Sent!
                            </Alert>
                        </Snackbar>
                        <Button type="submit" size="large">
                            Submit
                        </Button>
                    </div>
                </form>
            </Grid>
        </Grid>
    )
}

