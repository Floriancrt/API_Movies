const { appendFile, mkdir } = require('fs');
const { join } = require('path');
const { connection } = require('./database.js');
const { format } = require('date-fns');
const destDir = 'movies';

const createMoviesFile = () => {
    return new Promise ((resolve,reject) => {
        connection.query(`SELECT * FROM movies`, (error,results) => {
            if (error) reject(); 
            mkdir(destDir, () => {
                const d = format(new Date, 'ddmmyyyy_Hms');
                const fileName = join(destDir, `movies_${d}.txt`);
                results.forEach(movie => {
                    const movieLine = `${movie.title} - ${movie.date}\n`;
                    appendFile(fileName,movieLine, (err) => {
                        if(err) return reject(err);
                        else resolve();
                    });
                });
            });
        });
    });
};

module.exports = { createMoviesFile };