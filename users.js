const mongoose  = require('mongoose');

mongoose
  .connect('mongodb://localhost/project',
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => console.log('db connected!'))
  .catch(err => console.log(err));

const bookSchema = mongoose.Schema({
  BookTitle : String,
  AuthorName : String
})

module.exports = mongoose.model('book', bookSchema)