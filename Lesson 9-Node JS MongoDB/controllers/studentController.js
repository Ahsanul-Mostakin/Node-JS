const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');


router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.render('student/list', { 
            list: students, 
            title: 'Students List' 
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


router.get('/addOrEdit', (req, res) => {
    res.render('student/addOrEdit', {
        viewTitle: 'Add Student'
    });
});

router.post('/addOrEdit', async (req, res) => {
    const { _id, fullName, email, mobile, city } = req.body;
    const student = new Student({ fullName, email, mobile, city });

    try {
        if (_id) {
            await Student.findByIdAndUpdate(_id, { fullName, email, mobile, city });
            res.redirect('/students');
        } else {
            await student.save();
            res.redirect('/students');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving student');
    }
});

module.exports = router;
