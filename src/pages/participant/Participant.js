import React from 'react';  
import axios from 'axios';  
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Grid from '@material-ui/core/Grid';
import {Container ,Typography, CssBaseline} from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


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
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));




export default function Participant(props){  

  const classes = useStyles();

  let [participants, setParticipants] = React.useState('')



  React.useEffect(() => {                          
    axios.get('https://meetup-web.free.beeceptor.com/getAll')  
    .then(response => {  
        //console.log(response.data)
        setParticipants(response.data)

    })  
    .catch(function (error) {  
        console.log(error);  
    })  
}, [setParticipants])
  

  

  const goDetailsPage=(id)=>{
      props.history.push('/PartiDetails/'+id);
  }


  const getLocalityName=(value)=>{
    switch(value)
    {
        case 1:
            return "Bangalore";
            case 2:
            return "Mumbai";
            case 3:
                return "Delhi";
                case 4:
                    return "Chennai";   
    }
}

   

return (  
  <Container component="main" maxWidth="xs">
  <CssBaseline />   
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Participants
        </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="search"
                name="search"
                variant="outlined"
                fullWidth
                id="search"
                label="Search by Name or Locality"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
            <List className={classes.root}>
            {Object.values(participants).map((item) => {
                 console.log('The Item is->'+item)
        return(
               
                <ListItem key={item.id}  onClick={()=> goDetailsPage(item.id)} >
                    <ListItemText key={item.id} primary={item.name} 
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {getLocalityName(item.locality) }
                          </Typography>
                        </React.Fragment>
                      }
                />
                <ListItemSecondaryAction>
     
                </ListItemSecondaryAction>
            </ListItem>
            );
        })}
        
                </List>
 
            </Grid>
 
          </Grid>
   
  
      </div>

     </Container>  
);  
}     