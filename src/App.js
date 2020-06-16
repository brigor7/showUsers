import React, { Component } from 'react';
import Users from './components/user/Users';
import Switch from './components/toogle/Switch';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    };
  }
  async componentDidMount() {
    console.log('componentDidMount de APP.js');
    const res = await fetch(
      'https://randomuser.me/api/?seed=rush&nat=br&results=10'
    );
    const json = await res.json();

    this.setState({
      users: json.results,
    });
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
    return (
      <div>
        <Switch
          onEnable={this.handleShowUsers}
          description="Mostrar usuários:"
        />
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
