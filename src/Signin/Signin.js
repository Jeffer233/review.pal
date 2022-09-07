import React from 'react';

class Signin extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if (user) {
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }

  render() {
    return (
     <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 center">Paypal</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address"></label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  placeholder="Email Address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password"></label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                />
                <p className="fw6 blue mt0 mb3">Forget password?</p>
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue w-100"
                type="submit"
                value="Log In"
              />
            </div>
            <div>
            <hr className="mw30 bb bw1 b--black-10" />
            </div>
            <div className="">
              <input
                
                className="f6 link dim br-pill ba ph3 pv2 mb2 dib black w-100"
                type="submit"
                value="Sign Up"
              />
            </div>
          </div>
        </main>
      </article>
   );
  }
}

export default Signin;
