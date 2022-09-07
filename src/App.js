import React, { Component } from 'react';
import Signin from './Signin/Signin';
import Home from './Home/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      route: 'signin',
      user: {
        email: '',
        password: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      email: data.email,
      password: data.password
    }})
  }

  onRouteChange = () => {
    this.setState( {route: 'home'} );
  }

  render() {
    return (
    <div className=''>
     { this.state.route === 'signin'
     ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
     : <Home />
     }
    </div>
   );
  }
}

export default App;
