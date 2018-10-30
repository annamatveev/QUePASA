const router = require('express').Router();
const asyncMiddleware = require('../middlewares/asyncMiddleware');
const activitiesStore = require('../activities');
const activityTypes = require('../data/activityTypes');
const departments = require('../data/departments');

router.get(
  '/activities',
  asyncMiddleware(async (req, res) => {
    const activities = await activitiesStore.getAllActivities();
    res.send(activities);
  }),
);

router.post('/activities', (req, res) => {
  activitiesStore.addNewActivity(req.params.activity);
  res.send();
});

router.get('/activityTypes', (req, res) => {
  res.send(activityTypes);
});

router.get('/departments', (req, res) => {
  res.send(departments);
});

module.exports = router;
