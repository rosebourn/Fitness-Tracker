const Workout = require("../models/workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {$push: {exercises: req.body}})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    // Workout.findByIdAndUpdate({ _id: req.params.id }, req.body)
    // .then(function() {
    //   Workout.findOne({ _id: req.params.id }).then(function(dbWorkout) {
    //     res.json(dbWorkout);
    //   });
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
});

router.post("/api/workouts", ({ body }, res) => {
    // Workout.insertMany(body)
    // .then(dbWorkout => {
    //   res.json(dbWorkout);
    // })
    // .catch(err => {
    //   res.status(400).json(err);
    // });
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
