
import AboutMe from './About/AboutMe';
import './css/style.css'
import './css/loader.css'
import './css/small.css'
import './css/medium.css'
import './css/large.css'
import './css/xlarge.css'
import Nav from './Navigation/Nav';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Projects from './Projects/Projects';
import Skills from './Technologies/Skills';
import Contact from './Contact/Contact';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Nav/>



        <Switch>

            <Route exact path='/'><AboutMe/></Route>
            <Route  path='/projects'><Projects/></Route>
            <Route  path='/skills'><Skills/></Route>
            <Route  path='/contact'><Contact/></Route>
           
          </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
