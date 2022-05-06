const express = require('express');

const app = express();

const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'loansappbackend',
  password: 'postgres',
  dialect: 'postgres',
  port: 5432
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extende: false }));

pool.connect((err, client, release ) => {
  if (err) {
    return console.error('Error connecting to client', err.stack);
  }
  client.query('SELECT NOW()', (err, result) => {
    release();
    if (err) {
      return console.error('Error executing query', err.stack);
    }
    console.log('Connected to database!!!');
  });
});

app.get('/request-loan', (req, res, next) => {
  console.log('loan requesting: ........');
  try {
    const transc = pool.query('SELECT * FROM transaction');
    console.log(transc);
    res.send(transc.rows);
  } catch(err) {
    console.log(err);
  }
});

const server = app.listen(3005, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`App starting at ${host} on port ${port}`);
});
