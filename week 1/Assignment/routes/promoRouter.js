
const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})
.get((req, res) => {
    res.send("Retrieved all promotions");
})
.post((req, res) => {
    res.send("Creating new promotion with name: " + req.body.name + " and description: " + req.body.description);
})
.put((req, res) => {
    res.status(403);
    res.send("Put on /promotions not supported");
})
.delete((req, res) => {
  
    res.send("Deleting all promotions");
});


promoRouter.route('/:id')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  
})
.get((req, res) => {
    res.send("retrieving promotion with id: " + req.params.id);

})
.post((req, res) => {
    res.status(403);
    res.send("POST on promotions/" + req.params.id + " not allowed");
})
.put((req,res) => {
    res.send("Updating promo with id: " + req.params.id + " with name: " + req.body.name + " and description: " + req.body.description);
})
.delete((req, res) => {
    res.send("Deleting promo with id:" + req.params.id);
});

module.exports = promoRouter;