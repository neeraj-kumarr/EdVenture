// // eslint-disable-next-line
// const mongoose = require("mongoose")

// mongoose.connect("mongodb://0.0.0.0:27017/data")
//     .then(() => {

//         console.log("MongoDB connected");
//     })
//     .catch((err) => {
//         console.error("MongoDB connection failed:", err);
//     });

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//     },
//     password: {
//         type: Number,
//         required: true,
//     },
//     organization_id: {
//         type: Number,
//         required: true,
//     },
//     user_id: {
//         type: Number,
//         required: true,
//     },
//     role: {
//         type: String,
//         required: true,
//     },
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;
const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/data")
    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const users = mongoose.model("users", newSchema)

module.exports = users