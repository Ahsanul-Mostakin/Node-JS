const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
