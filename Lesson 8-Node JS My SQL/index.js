const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('MySQL Connected');
});

const app = express();

// Create Database
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error creating database:', err);
            res.status(500).send('Error creating database: ' + err.message);
        } else {
            res.send('Database Created');
        }
    });
});

// Create Table
app.get('/createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee (id INT AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error creating table:', err);
            res.status(500).send('Error creating table: ' + err.message);
        } else {
            res.send('Employee table created');
        }
    });
});

// Insert employee
app.get('/employee', (req, res) => {
    let post = { name: 'Ahsanul Mostakin', designation: 'Chief Executive Officer' };
    let sql = 'INSERT INTO employee SET ?';

    db.query(sql, post, (err, result) => {
        if (err) {
            console.error('Error inserting employee:', err);
            res.status(500).send('Error inserting employee: ' + err.message);
        } else {
            res.send('Employee added');
        }
    });
});

// select employees
app.get('/getemployee', (req, res) => {
    let sql = 'SELECT * FROM employee';
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('Employee details fetched');
    });
});

// update employee
app.get('/updateemployee/:id', (req, res) => {
    let newName = 'Updated name';
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`;

    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Employee updated');
    });
});


// delete employee
app.get('/deleteemployee/:id', (req, res) => {
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Employee deleted');
    });
});

app.listen(3000, () => {
    console.log('Server Started on port 3000');
});