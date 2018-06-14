import React, { Component } from 'react';
import './doug.jpg';
import './App.css';
import Header from './Header';
import Content from './Content';
import index from './index.js';
import ActivityItem from './ActivityItem';

class App extends Component {
  render() {

    const {activities} = this.props;

    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Content activities={activities} />
          
        </div>
      </div>
    );
  }
}

export default App;
