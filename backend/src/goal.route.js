const express = require('express');
const goalRoutes = express.Router();

// Require Goal model in our routes module
let Goal = require('./goal.model');


// insert a new question
/*app.post('/', (req, res) => {
    const {title, description} = req.body;
    const newQuestion = {
        id: questions.length + 1,
        title,
        points,
        // description,
        // answers: [],
    };
    questions.push(newQuestion);
    res.status(200).send();
});*/


// Defined store route
goalRoutes.route('/').post(function (req, res) {
    console.log(req.body);
    console.log('empty route');
});

goalRoutes.route('/goals').get(function (req, res) {
    // console.log('request all goals');
    Goal.find(function (err, goals) {
        if (err) {
            console.log(err);
        } else {
            res.json(goals);
        }
    });
});

// Defined store route
goalRoutes.route('/new').post(function (req, res) {
    console.log(req.body);

    let goal = new Goal(req.body);
    goal.save()
        .then(goal => {
            res.status(200).json({'goal': 'goal in added successfully'});
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
goalRoutes.route('/').get(function (req, res) {
    Goal.find(function (err, goales) {
        if (err) {
            console.log(err);
        } else {
            res.json(goales);
        }
    });
});

// Defined edit route
goalRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Goal.findById(id, function (err, goal) {
        res.json(goal);
    });
});

//  Defined update route
goalRoutes.route('/update/:id').post(function (req, res) {
    Goal.findById(req.params.id, function (err, goal) {
        if (!goal)
            res.status(404).send("data is not found");
        else {
            goal.person_name = req.body.person_name;
            goal.goal_name = req.body.goal_name;
            goal.goal_gst_number = req.body.goal_gst_number;

            goal.save().then(goal => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
goalRoutes.route('/delete/:id').get(function (req, res) {
    Goal.findByIdAndRemove({_id: req.params.id}, function (err, goal) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = goalRoutes;
