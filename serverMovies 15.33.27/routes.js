const express = require('express');
const axios = require('axios');
const router = express.Router();
const { createMoviesFile } = require('./file.js');
const { connection } = require('./database.js');


router.get('/movies', (req, res) => { 

        connection.query(`SELECT * FROM movies`, (error, results) => {
        if(error) res.status(201).json({ error });
        res.status(201).json({ movie : results});
    });
});

router.get('/movies/:id', (req,res) => {
    const { id } = req.params;
    connection.query(`SELECT * FROM movies WHERE id = ${id}`, (error, results) => {
        res.status(201).json({ movie : results[0]});
    });
});


router.post('/addmovies',(req,res) => {
    var title = req.body.title; 
    var director = req.body.director;
    var date = req.body.date;

    let sql = `INSERT INTO movies(title,director,date) VALUES(${title},${director},${date})`;
    connection.query(sql, ( error, response) => {
        if (error) throw error;
        console.log("1 ligne à été ajoutée");
    });

});

router.get('/removemovies/:id',(req,res) => {
    const { id } = req.params;
    connection.query(`DELETE FROM movies WHERE id = ${id}`, (error, results) => {
        if(error) res.status(201).json({ error });
        res.status(201).json({ movie : results[0]});
    });
});

router.post('/editmovies/:id',(req,res) => {
    var title = req.body.title; 
    var director = req.body.director;
    var date = req.body.date;
    const { id } = req.params;

    let sql = `UPDATE movies SET title = '${title}',director = '${director}',date = '${date}' WHERE id = ${id}`;
   
    connection.query(sql, ( error, response) => {
        if (error) throw error;
        console.log("1 ligne à été modifié");
    });
});

router.get('/moviesFiles', (req, res) => {
    createMoviesFile()
     .then(() => res.status(201).json({ message : 'File saved' }))
     .catch(err => res.status(400).json({ error: 'File not saved' }));
 });


module.exports = router;