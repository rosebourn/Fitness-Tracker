const Workout = require("../models/workout");
const router = require("express").Router();

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function() {
      Workout.findOne({ _id: req.params.id }).then(function(dbWorkout) {
        res.json(dbWorkout);
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workout", ({ body }, res) => {
    Workout.insertMany(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workout/range", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;
