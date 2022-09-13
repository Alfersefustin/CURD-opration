import express from "express";
import mongoose from "mongoose";
import customer from "./customer.js";

const CONNECTION_STRING =
  "mongodb://127.0.0.1:27017/office?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";
const app = express();
app.use(express.json());
// app.use("/try", (req, res) => {
//   //   res.status(200).json("method is working");
//   const { one, b } = req.body;
//   res.status(200).json({ c: one + b });
//   //  console.log('function is worked');
// });

app.post("/createuser", async (req, res) => {
//   var data = await req.body(customer.create(data));


    try {
      var data = await customer.create({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
        //   name: "sebastin",
        //   email: "alfer@gmail.com",
        //   dob: 1997,
        //   age: 25,
        //   salary: 100000,
        //   did: 1,
        //   designation: "ui developer",
        //   pincode: 609603,
        //   pancard: 178499384938,
        //   mobilenumber: 9878766775,
      });
    //  res.status(200).json(data);
    console.log("sucessfully created");
    } catch (error) {
      res.status(400).json(error);
    }
});

app.use('/update/:age', async (req, res) => {
    try {
        await customer.update({ age: req.params.age }, {
            $set: {
                name: req.body.name,
                age: req.body.age,
                gender: req.body.gender
            }
        })
        var update = await customer.find({ age: req.params.age })
        res.send(update);
    } catch (error) {
        res.status(400).json(error.message);
    }
})

app.use('/removeData/:id', async (req, res) => {
    await customer.findByIdAndDelete({ _id: req.params.id }).then(res.send(`deleted successfully`))
})
mongoose.connect(CONNECTION_STRING).then(() => {
  app.listen(1900, () => console.log("express is working.....!"));
});
