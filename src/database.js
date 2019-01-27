const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected to', process.env.MONGODB_URI))
    .catch(err => console.error(err));