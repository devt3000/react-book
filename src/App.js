import React, { Component } from 'react';
import './doug.jpg';
import './App.css';
import Header from './Header';
import Content from './Content';
import index from './index.js';
import ActivityItem from './ActivityItem';
import Clock from './Clock';
import timeline from './styles/timeline.css';

class App extends Component {
  render() {

    const {activities} = this.props;

    return (
      
      <div className="notificationsFrame">
      <link href="timeline" rel="stylesheet" type="text/css" />
        <div className="panel">
          <Header title="Timeline" />
          <Content activities={activities} />
          <Clock />
          
        </div>
      </div>
    );
  }
}

export default App;
