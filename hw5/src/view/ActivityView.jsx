import React from 'react';
import ActivityController from '../controller/ActivityController';

const ActivityView = ({ activity, onGetActivity }) => {
  const handleClick = async () => {
    const newActivity = await ActivityController.fetchActivity();
    onGetActivity(newActivity);
  };

  return (
    <div>
      <h1>What to Do?</h1>
      <button onClick={handleClick}>Get Activity</button>
      <p>{activity}</p>
    </div>
  );
};

export default ActivityView;