import React from 'react';  
import axios from 'axios';  
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Container ,Typography, CssBaseline} from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function PartDetails(props){  

  const classes = useStyles();

  let [participant, setParticipant] = React.useState('')



  React.useEffect(() => {                          
    axios.get('https://meetup-web.free.beeceptor.com/getAll')  
    .then(response => {  
        console.log(response.data[0])
        //let item= response.data.find(x => x.id === props.match.params.id);
        let item = response.data[props.match.params.id-1];
            console.log(item)
        setParticipant(item)

    })  
    .catch(function (error) {  
        console.log(error);  
    })  
}, [setParticipant])

   

return (  
  <Container component="main" maxWidth="xs">
  <CssBaseline />   
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Paticipant Details
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                value={participant.name}
                InputProps={{
                    readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                fullWidth
                id="age"
                name="age"
                label="Age"
                value={participant.age}
                InputProps={{
                    readOnly: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="dob"
                name="dob"
                label="Date of Birth"
                value={participant.dob}
                InputProps={{
                    readOnly: true,
                }}             
             />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="proffesion"
                name="profession"
                label="Profession"
                value={participant.profession}
                InputProps={{
                    readOnly: true,
                }}              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="locality"
                label="Locality"
                name="locality"
                value={participant.locality}
                InputProps={{
                    readOnly: true,
                }}                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="noOfGuest"
                label="No of Guest"
                name="noOfGuest"
                value={participant.noOfGuest}
                InputProps={{
                    readOnly: true,
                }}                />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rowsMax={4}
                name="address"
                label="Address" 
                id="address"
                value={participant.address}
                InputProps={{
                    readOnly: true,
                }}                />
            </Grid>
           
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{props.history.goBack()}}
          >
            Close
          </Button>
  
        </form>
      </div>

     </Container>  
);  
}     