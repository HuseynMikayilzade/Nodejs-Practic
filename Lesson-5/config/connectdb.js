const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://mikayilzade366:huseyn123@mikayilzdedb.scbzl.mongodb.net/?retryWrites=true&w=majority&appName=mikayilzdedb")
        console.log("Db connected.");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectdb;