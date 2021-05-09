import { BrowserRouter as Router, Switch, Route, IndexRedirect } from 'react-router-dom';  
import Register from './pages/register/Register';  
import Participant from './pages/participant/Participant';  
import PartDetails from './pages/part-details/PartiDetails';  
import DashBoard from './pages/dashboard/DashBoard';  

import { Typography, AppBar,Toolbar, CssBaseline} from  '@material-ui/core';
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
      <Route exact path='/' component={DashBoard} />  
      <Route exact path='/DashBoard' component={DashBoard} />  
      <Route exact path='/Register' component={Register} />  
        <Route path='/Participant' component={Participant} />  
        <Route path='/PartiDetails/:id' component={PartDetails} />  
      </Switch>  
  </Router>  
  </>
  );
}

export default App;
