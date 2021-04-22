var express = require('express');
var router = express.Router();

var bookModel = require('./users');

/* GET home page. */

router.get('/', function(req, res){
  res.status(200).json({ msg: 'router connected' });
})

router.post('/setRecord', function(req, res){
 var data =  new bookModel({
    BookTitle : req.body.BookTitle,
    AuthorName : req.body.AuthorName
  });

  data.save()
    .then((book) => res.status(201).json({message: 'Book Registered', book}))
    .catch(error => res.status(500).json({error}));
   
})

router.get('/getRecord/:id', function(req, res) {

  bookModel.findOne({_id: req.params.id})
    .then(book => {
      res.status(200).json({book})
    }).catch(error => res.status(500).json({error}));
});


module.exports = router;
