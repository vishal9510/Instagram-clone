const express = require('express');
const app = express()
const port = process.env.port || 5000;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");
const path = require("path");

app.use(cors())


mongoose.connect(mongoUrl);
app.use(express.json())
require('./models/model')
require('./models/post')
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
app.use(require("./routes/user"))


mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})

// serving the frontend

app.use(express.static(path.join(__dirname, "./frontend/build"))),

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
        if (err) {
            console.error(err)
            res.status(500).send("Error in serving the static files")
        }
    }
    )
})
app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})