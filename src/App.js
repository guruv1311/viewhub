import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Account from './Account';
import Gif from './Gif';
import Login1 from './Login1';
import Wru from './Wru';
import Condet from './Condet';
import Shop from './Shop';
import Choose1 from './Choose1';
import Kr1 from './Kr1';
import Showmore from './Showmore';
import Recruit from './Recruit';
import Reviewve from './Reviewve';
import Edit from './Edit';
import Account1 from './Account1';
import Login2 from './login2';
import Kr1user from './Kr1user';
import Chooseu from './Chooseu';
import Food from './Food';
import Review1 from './Review1';
import Location from './Location';
import Showuser from './Showuser';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Gif}></Route>
        <Route exact path="/Wru" component={Wru}></Route>
        <Route exact path="/Login1" component={Login1}></Route>
        <Route exact path="/Account" component={Account}></Route>
        <Route exact path="/Condet" component={Condet}></Route>
        <Route exact path="/Shop" component={Shop}></Route>
        <Route exact path="/Choose1" component={Choose1}></Route>
        <Route exact path="/Kr1" component={Kr1}></Route>
        <Route exact path="/Showmore" component={Showmore}></Route>
        <Route exact path="/Recruit" component={Recruit}></Route>
        <Route exact path="/Reviewve" component={Reviewve}></Route>
        <Route exact path="/Edit" component={Edit}></Route>
        <Route exact path="/Account1" component={Account1}></Route>
        <Route exact path="/Login2" component={Login2}></Route>
        <Route exact path="/Kr1user" component={Kr1user}></Route>
        <Route exact path="/Chooseu" component={Chooseu}></Route>
        <Route exact path="/Food" component={Food}></Route>
        <Route exact path="/Review1" component={Review1}></Route>
        <Route exact path="/Location" component={Location}></Route>
        <Route exact path="/Showuser" component={Showuser}></Route>
        </Switch>
    </div>
    </Router>
  );
}
export default App;

