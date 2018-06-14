import React from 'react';
import Content from './Content';
import App from './App';
import index from './index';

class ActivityItem extends React.Component {
    render() {
      const {activities} = this.props;

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