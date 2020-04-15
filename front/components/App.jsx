import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle.jsx';
import Nav from './Nav/Nav.jsx';
import Study from './Study/Study.jsx';
import Train from './Train/Train.jsx';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/study">
          <Study />
        </Route>
        <Route exact path="/train">
          <Train />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
