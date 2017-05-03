import React from 'react';
import Popular from './popular';
import { 
  BrowserRouter as Router,
  Route,
  Switch      
} from 'react-router-dom';
import Nav from './nav';
import Battle from './battle';
import Home from './home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular}/>
            <Route render={() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
