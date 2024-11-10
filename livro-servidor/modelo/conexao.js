const mongoose = require('mongoose');

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = mongoose;
