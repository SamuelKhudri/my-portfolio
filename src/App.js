import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import ProjectShow from './Components/ProjectShow/ProjectShow';


function App() {
  return (
    <div >
      <Router>
        <br />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/projects">
            <ProjectShow></ProjectShow>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;