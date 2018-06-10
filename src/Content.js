import React from 'react';
import index from './index';
import ActivityItem from './ActivityItem';

class Content extends React.Component {

    

    render() {


        const {activities} = this.props;

        
        return (
            <div className="content">
            <div className="line"></div>

            {/*Timeline item*/}
            {activities.map((activities) => {
              <ActivityItem activities={activities} />
            })}
            
        </div>
        )
    }
}



export default Content;