import { app } from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// Environments variables
const PORT = process.env.PORT;
const dbAdmin = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME;


//Set up mongoose connection
mongoose.connect(`mongodb+srv://${dbAdmin}:${dbPassword}@devcommdb.q53uz.mongodb.net/${dbName}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => {
        console.log(`DB connected`)
    })
    .catch(err => {
        console.log(`DB failed ${err.message}`)
    })

app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`)
})