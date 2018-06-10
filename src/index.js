import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Content from './Content';

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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

