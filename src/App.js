import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import Register from './pages/register/Register';  
import Participant from './pages/participant/Participant';  
import {Container ,Typography, AppBar,Toolbar, CssBaseline} from  '@material-ui/core';
import './App.css';

function App() {
  return (
    <>
  <CssBaseline></CssBaseline>
    <Router>  
      <AppBar>
        <Toolbar>
       <Typography variant='h4'>Meetup RSVP Website</Typography> 
        </Toolbar>
      </AppBar>
      <Switch>  
      <Route exact path='/Register' component={Register} />  
        <Route path='/Participant' component={Participant} />  
        {/*   <Route path='/Studentlist' component={Studentlist} />   */}
      </Switch>  
  </Router>  
  </>
  );
}

export default App;
