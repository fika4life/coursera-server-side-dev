const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});

dishRouter.route('/:id')
.get((req, res) => {
    res.send("Sending dish with id " + req.params.id);
})
.post((request, response) => {
    response.statusCode = 403;
    response.send('POST operation not supported on dishes/' + request.params.id);
})
//ADD PUT REQUEST
.put((request, response) => {
    response.send("Updating dish to name: " + request.body.name + " and description " + request.body.description);
})
//ADD DELETE REQUEST
.delete((req, res) => {
    res.send('Deleting dish with id:' + req.params.id);
});

module.exports = dishRouter;