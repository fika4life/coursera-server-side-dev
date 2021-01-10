const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders');
});

leaderRouter.route('/:id')
.get((req, res) => {
    res.send("Sending leader with id " + req.params.id);
})
.post((request, response) => {
    response.statusCode = 403;
    response.send('POST operation not supported on leaders/' + request.params.id);
})
//ADD PUT REQUEST
.put((request, response) => {
    response.send("Updating leader to name: " + request.body.name + " and description " + request.body.description);
})
//ADD DELETE REQUEST
.delete((req, res) => {
    res.send('Deleting leader with id:' + req.params.id);
});

module.exports = leaderRouter;