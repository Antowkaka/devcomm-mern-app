import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

//Routes
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

export const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//parse form-data
const upload = multer();
app.use(upload.array());

//Routers middlewares
app.use('/', indexRouter);
app.use('/api/users', usersRouter);


