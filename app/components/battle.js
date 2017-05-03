import React from 'react';
import PlayerInput from './player-input';

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null
    }
  }

  handleSubmit = (id, username) => {
    this.setState(() => {
      let newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Image'] = 'https://github.com' + username + '.png?size=200';
      return newState;
    });
  }

  render() {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;

     return (
     <div>
       <div className='row'>
          {!playerOneName && 
                              <PlayerInput
                                id='playerOne'
                                label='Player One'
                                onSubmit={this.handleSubmit}
                              />}
          {!playerTwoName && 
                              <PlayerInput 
                                id='playerTwo'
                                label='Player Two'
                                onSubmit={this.handleSubmit}
                              />}
       </div>
     </div>
    );
  }
}

export default Battle;