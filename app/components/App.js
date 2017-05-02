import React from 'react';
import Popular from './popular';
import { 
  BrowserRouter as Router,
  Route      
} from 'react-router-dom';
import Nav from './nav';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Route path='/popular' component={Popular}/>
        </div>
      </Router>
    );
  }
}

export default App;
