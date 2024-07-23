import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';


const app = express();

import bookrouter from './routes/book.router.js'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

// for file upload
app.use(fileUpload());
app.use("/book",bookrouter);
app.listen(3001)
console.log("Server Invoked linked http://localhost:3001");