
import AboutMe from './About/AboutMe';
import './css/style.css'
import './css/small.css'
import './css/medium.css'
import './css/large.css'
import './css/xlarge.css'
import Nav from './Navigation/Nav';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Projects from './Projects/Projects';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>



        <Switch>

            <Route exact path='/'><AboutMe/></Route>
            <Route  path='/projects'><Projects/></Route>
           
          </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
