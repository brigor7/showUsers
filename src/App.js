import React, { Component } from 'react';
import Users from './components/user/Users';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();
    console.log(json);

    this.setState({
      users: json.results,
    });
    console.log('componentDidMount de APP.js');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate de APP.js');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount de app.js');
  }

  handleShowUsers = (event) => {
    this.setState({ showUsers: event.target.checked });
  };

  render() {
    const { showUsers, users } = this.state;
    console.log(showUsers);
    return (
      <div>
        <div className="switch">
          <label>
            Mostrar usuários:
            <input type="checkbox" onChange={this.handleShowUsers} />
            <span className="lever" />
          </label>
        </div>
        <hr />
        {showUsers && (
          <div>
            <Users users={users} />
          </div>
        )}
      </div>
    );
  }
}
