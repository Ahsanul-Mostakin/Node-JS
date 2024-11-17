const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        minlength: [3, 'Name must be at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        match: [/\S+@\S+\.\S+/, 'Email is invalid']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        minlength: [10, 'Mobile number must be at least 10 digits'],
        maxlength: [15, 'Mobile number cannot exceed 15 digits']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    }
});


module.exports = mongoose.model('Student', studentSchema);
