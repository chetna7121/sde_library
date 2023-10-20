import React, { Component } from 'react';
import './Login.css'; // Import the CSS file

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // Add your login logic here
    console.log('Username: ', username);
    console.log('Password: ', password);
  }

  render() {
    return (
     <div classname="container">
      <div class="ocean">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
</div>

      <h1>SDE LIBRARY 🤖</h1>
      <div className="container1"> {/* Use className for styling */}
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;
