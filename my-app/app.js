// const express = require("express");
// const collection = require("./mongo");
// const cors = require("cors");
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // Route to serve the login form (GET)
// // app.get("/login", cors(), (req, res) => {
// //     res.send("Please provide login credentials.");
// // });

// // Route to handle login submissions (POST)
// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find a user based on the email
//         const user = await collection.findOne({ email });

//         if (user) {
//             // Check if the provided password matches
//             // Successful login
//             res.json("exist")
//         } else {
//             // Incorrect password
//             res.json("notexist")
//         }
//     }
//     catch (e) {
//         // Internal server error
//         res.json("fail")
//     }
// });

// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

const express = require("express")
const users = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/", cors(), (req, res) => {

})


app.post("/", async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await users.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }

    }
    catch (e) {
        res.json("fail")
    }

})



app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await users.findOne({ email: email })

        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await users.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }

})

app.listen(3000, () => {
    console.log("port connected");
})
