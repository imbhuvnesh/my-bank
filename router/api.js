const express = require('express');
const router = express.Router();
const User = require('../model/user');

//get Users
router.get('/users', (req, res, next) => {
    User.find({}).then((user) => {
        res.send(user);
    }).catch(next);
});

//Add user
router.post('/users', (req, res, next) => {
    User.create(req.body).then((user) => {
        res.send(user);
    }).catch(next);
});
//update user
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
        User.findOne({ _id: req.params.id }).then((user) => {
            res.send(user);
        });
    }).catch(next);
});

//delete user
router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({ _id: req.params.id }).then((user) => {
        res.send(user);
    }).catch(next);
});

module.exports = router;