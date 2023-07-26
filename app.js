const mongoose = require('mongoose');
(express = require('express')), (app = express());

require('dotenv').config();
const port = process.env.PORT || 3000;

//const uri = process.env.URI;
const uri = process.env.ATLAS_URI;
console.log("Uri : " + uri);
//mongoose.connect(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true   }
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

// Create a Schema object

const Schema = mongoose.Schema;

// Create a Schema object
const examrecordsSchema = new mongoose.Schema({
        name: { type: String, required: true },
        sid: { type: String, required: true }
});

// This Activitry creates the collection called activitimodels
const Examrecordsmodel = mongoose.model('ExamRecords', examrecordsSchema);

app.get('/', (req, res) => {
    const task1 = new Examrecordsmodel({
    name: 'Rushan Albreththulage', sid : '300361357'
});
Examrecordsmodel.insertMany([task1]);
    res.send(`<h1>Collection Added</h1>`);
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});