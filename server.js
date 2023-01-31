const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const app = express();

app.use(cors({ origin: "*" }));

app.use(express.json());
var database;

app.get("/", async (req, res) => {
  res.send("Welcome to mongodb Api");
});

// app.get('/api/resources',async(req,res) => {
//     database.collection('developers').find({}).toArray((err, result) => {
//         if (err) throw err
//         res.send(result)
//     })
//  })

const Data = {
  Resources: {
    Employee_Details: [],
    Project_Details: [],
  },
};

app.get("/api/resources", async (req, res) => {
  res.send(Data);
});

app.listen(8000, () => {
  MongoClient.connect(
    "mongodb+srv://saisrinivas:ajay1234@cluster0.drbddtw.mongodb.net/test",
    { useNewUrlParser: true },
    (error, result) => {
      if (error) throw error;
      database = result.db("Aifa_Portal_DB");
      console.log("Connection Successfull");
      database
        .collection("Project_Details")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          Data.Resources.Project_Details.push(...result);
          //console.log(Resources);
        });
      database
        .collection("Employee_Details")
        .find({})
        .toArray((err, result) => {
          if (err) throw err;
          Data.Resources.Employee_Details.push(...result);
          //console.log(Data);
        });
    }
  );
});
