const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout' }));
app.set('view engine', 'hbs');


mongoose.connect('mongodb://localhost/studentDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));


const studentRoutes = require('./controllers/studentController');
app.use('/students', studentRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to the Student Management System!');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
