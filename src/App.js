import React, { Component } from 'react';
import './doug.jpg';
import './App.css';
import Header from './Header';
import Content from './Content';
import index from './index.js';
import ActivityItem from './ActivityItem';

class App extends Component {
  render() {
    const activity = {
      timestamp: new Date().getTime(),
      text: "Ate lunch",
      user: {
          id: 1,
          name: 'Nate',
          avatar: './doug.jpg'
      },
      comments: [
          { from: 'Ari', text: 'Me too!'}
      ]
  };

  const activities = [
  {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
      id: 1,
      name: 'Nate',
      avatar: './doug.jpg'
    },
    comments: [
      { from: 'Ari', text: 'Me too' }
    ]
  },
  {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
      id: 2, 
      name: 'Ari',
      avatar: './doug.jpg'
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
  }
]
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header title="Timeline" />
          <Content activities={activities} />
          <ActivityItem activities={activities} />

        </div>
      </div>
    );
  }
}

export default App;
