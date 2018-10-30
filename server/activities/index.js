const activities = require('../data/activities');
const newActivitiesListeners = [];

function getAllActivities() {
  return new Promise(resolve => resolve(activities));
}

function addNewActivity(activity) {
  activities.push(activity);
  publishNewActivity(activity);
}

function subscribeNewActivities(listener) {
  newActivitiesListeners.push(listener);

  return () => {
    const i = newActivitiesListeners.indexOf(listener);
    newActivitiesListeners.splice(i, 1);
  };
}

function publishNewActivity(activity) {
  newActivitiesListeners.forEach(l => l(activity));
}

module.exports = {
  getAllActivities,
  addNewActivity,
  subscribeNewActivities,
};
