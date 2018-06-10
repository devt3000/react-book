import React from 'react';
import Content from './Content';
import App from './App';

class ActivityItem extends React.Component {
    render() {
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
            <div className="item">
        
            <div className="avatar">
              <img
              alt={activities.text}
              src={activities.user.avatar} />
              {activities.user.name}
            </div>
            
            <span className="time">
              {activities.timestamp}
            </span>
            <p>{activities.text}</p>
            <div className="commentCount">
              <b>Comments: </b>
              {activities.comments.length}
            </div>
          </div>
          );
    }
}

export default ActivityItem;