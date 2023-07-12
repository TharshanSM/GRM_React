const mongoose = require("mongoose");
//const url = "mongodb://127.0.0.1:27017/grm";
const url =
    "mongodb+srv://TharshanSM:TharSM5764@grmtest.x2auozj.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    try {
        const conn = await mongoose.connect(url);
        console.log(
            `MongoDB Connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold);
        process.exit(1);
    }
};

module.exports = connect;
