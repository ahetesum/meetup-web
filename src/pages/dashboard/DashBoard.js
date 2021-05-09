import React from 'react';  
import axios from 'axios';  
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Container ,Typography, CssBaseline} from  '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import { Link } from 'react-router-dom';


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
  root1: {
    minWidth: 180,
    backgroundColor:'#D595B5'
  },
  root2: {
    minWidth: 180,
    backgroundColor:'#33FFF3'
  },
  root3: {
    minWidth: 180,
    backgroundColor:'#7CDA65'
  },
  root4: {
    minWidth: 180,
    backgroundColor:'#CB89D7'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));




export default function DashBoard(props){  

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [locality, setLocality] = React.useState('');
  const [profession, setProfession] = React.useState('');


  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeLocality = (event) => {
    setLocality(event.target.value);
  };
  const handleChangeProfession = (event) => {
    setProfession(event.target.value);
  };

  const doFilterData=()=>{

  }

  console.log(props.participants)

return (  
  <Container component="main" maxWidth="xs">
  <CssBaseline />   
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5" gutterBottom>
          Dashboard
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={6} >
          <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangeAge}
        >
          <MenuItem value={1}>13-18</MenuItem>
          <MenuItem value={2}>18-25</MenuItem>
          <MenuItem value={3}>25+</MenuItem>
        </Select>
        </FormControl>
            </Grid>
            <Grid item xs={6} >
            <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Locality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangeLocality}
        >
          <MenuItem value={1}>Bangalore</MenuItem>
          <MenuItem value={2}>Mumbai</MenuItem>
          <MenuItem value={3}>Delhi</MenuItem>
          <MenuItem value={4}>Chennai</MenuItem>
        </Select>
        </FormControl>
      </Grid>
            <Grid item xs={6} >
            <FormControl fullWidth className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Profession</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChangeProfession}
        >
          <MenuItem value={1}>Employee</MenuItem>
          <MenuItem value={2}>Student</MenuItem>
        
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} >
      <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>{doFilterData()}}
          >
            Filter
          </Button>
      </Grid>
          <Grid item xs={6} >
            <Card className={classes.root1}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Age Range :
                    </Typography>
         
                    <Typography variant='h3' className={classes.pos} color="textSecondary">
                    7
                    </Typography>
                   
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} >
            <Card className={classes.root2}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                   No of People in Locality 
                    </Typography>
         
                    <Typography variant='h3' className={classes.pos} color="textSecondary">
                    7
                    </Typography>
                   
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} >
            <Card className={classes.root3}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Avarage Group Size                   
                    </Typography>
         
                    <Typography variant='h3' className={classes.pos} color="textSecondary">
                    7
                    </Typography>
                   
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} >
            <Card className={classes.root4}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Profession Count
                    </Typography>
         
                    <Typography variant='h3' className={classes.pos} color="textSecondary">
                    7
                    </Typography>
                   
                </CardContent>
                </Card>
            </Grid>
          </Grid>
          <br/>
          <Grid container gutterBottom>
            <Grid item xs>
           
            </Grid>
            <Grid item>
              <Link to={"/Register"} variant="body2">
                {"Havenot Registered Yet    ? Register Here"}
              </Link>
            </Grid>
            </Grid>

        </form>
      </div>

     </Container>  
);  
}     