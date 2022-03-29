const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userResumeData = require("./models/userResumeSchema.js");
const app = express();

app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("DB Connected");
})

app.use(express.json());

//set the data to DB

app.post("/api", async (req, res) => {
    const data = await userResumeData.create(req.body);
    res.send({success: true, resumeData: data});
});

app.get("/api/:id", async (req, res) => {
     const data = await userResumeData.findById(req.params.id);
     console.log(data);
     res.send({success: true, resumeData: data});
});


// http://localhost:3000/view_resume/62431b73a846d2573b1a59f3


const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Sever is listening at port ${process.env.PORT} in ${process.env.NODE_ENV} environment`);
});


