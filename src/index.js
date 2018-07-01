import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Content from './Content';
import timeline from './styles/timeline.css';

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

ReactDOM.render(<App activities={activities} />, document.getElementById('root'));
registerServiceWorker();

