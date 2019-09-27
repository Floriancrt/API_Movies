const express = require('express');
const router = express.Router();
const { connection } = require('./database.js'); 

 const server = express();
 const port = 3000;

 // // app.use(bodyParser.json());
 // // app.use(cors());

router.get('/movies', (req, res) => {
    connection.connect();
    connection.query(`SELECT * FROM movies`, (error, results) => {
        if(error) res.status(201).json({ error });
        res.status(201).json({ movie : results});
    });
});


router.get('/addmovies',(req,res) => {
    var title = req.param("title"); 
    var director = req.param("director");
    var date = req.param("date");

    let sql = `INSERT INTO movies(title,director,date) VALUES(${title},${director},${date})`;
    connection.connect();
    connection.query(sql, ( error, response) => {
        if (error) throw error;
        console.log("1 ligne à été ajoutée");
    });


});

router.get('/removemovies/:id',(req,res) => {
    const { id } = req.params;
    connection.connect();
    connection.query(`DELETE FROM movies WHERE id = ${id}`, (error, results) => {
        if(error) res.status(201).json({ error });
        res.status(201).json({ movie : results[0]});
    });
});

server.use(router);

 server.listen(port, () => {
     console.log(`Node Server is running on port ${port} 🚀  🎥`);
 });