const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root2',
    password:'root2',
    database:'etslabo'
});

con.connect();

con.query('INSERT INTO customer VALUES (NULL, "JUAN","KL","LL")',(err,respuesta,fields)=>{
    if(err) console.log(err)

    console.log('fin')
})