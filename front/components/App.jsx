import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home/Home.jsx';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </>
);

export default App;
