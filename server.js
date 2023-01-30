const express = require('express');
const MongoClient = require('mongodb').MongoClient
const cors = require('cors');
const app = express();

app.use(cors({origin:'*'}));

app.use(express.json());
var database;

app.get('/',async(req,res) => {
   res.send('Welcome to mongodb Api')
})

app.get('/api/resources',async(req,res) => {
    database.collection('developers').find({}).toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
 })
 



app.listen(8000, () => {
    MongoClient.connect('mongodb+srv://saisrinivas:ajay1234@cluster0.drbddtw.mongodb.net/test', {useNewUrlParser : true}, (error, result) => {
        if(error) throw error
       database =  result.db('developersDB')
       console.log('Connection Successfull')
    })
    
})

