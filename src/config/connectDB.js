import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tiranga',
});

// const connection = mysql.createPool({
//     host: '193.203.184.165',
//     user: 'u936826252_daddy',
//     password: 'H@>M=5>aP5',
//     database: 'u936826252_daddy',
// });

export default connection;