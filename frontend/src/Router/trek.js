import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TrekDetails from '../pages/TrekDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/treks/:id">
          <TrekDetails />
        </Route>
        {/* Other routes */}
      </Switch>
    </Router>
  );
};

export default App;
