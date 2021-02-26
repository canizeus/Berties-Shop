const mongoose = require('mongoose');

//Establish a connnection to the Mongo DB.
const connectToDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB established connection with HOST: ${con.connection.host}`);
    });
};

module.exports = connectToDatabase;