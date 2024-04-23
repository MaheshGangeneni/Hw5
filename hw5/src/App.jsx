import React, { useState } from 'react';
import ActivityController from './controller/ActivityController';
import ActivityView from './view/ActivityView';
import './App.css'

const App = () => {
  const [activity, setActivity] = useState('');

  const handleGetActivity = async () => {
    const newActivity = await ActivityController.fetchActivity();
    setActivity(newActivity);
  };

  return (
    <div>
      <ActivityView activity={activity} onGetActivity={handleGetActivity} />
    </div>
  );
};

export default App;