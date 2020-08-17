import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import './i18n';
import { APIProvider } from './API/APIContext.jsx';
import GlobalStyle from './GlobalStyle.jsx';
import Nav from './Nav/Nav.jsx';
import Study from './Study/Study.js';
import Train from './Train/Train.js';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <APIProvider>
        <Nav />
        <Switch>
          <Route exact path="/study">
            <Study />
          </Route>
          <Route exact path="/train">
            <Train />
          </Route>
          <Route exact path="/">
            <Redirect to="/study" />
          </Route>
        </Switch>
      </APIProvider>
    </Router>
  </>
);

export default App;
