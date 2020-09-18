import { readFileSync } from 'fs';
import { createServer } from 'http';

import WebSocket from 'ws';
import express from 'express';


const PORT = 3000;

// for ssl
// const server = https.createServer({
//     cert: fs.readFileSync('/path/to/cert.pem'),
//     key: fs.readFileSync('/path/to/key.pem')
//   });

const app = express();
app.use('/static', express.static('static')) //path should look like http://localhost:3000/static/css/style.css
app.get('/', (req, res) => {
    res.redirect('/static/index.html') //send to home page as default 
});

const server = app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});




