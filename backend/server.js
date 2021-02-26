const app = require('./app');
const connectToDatabase = require('./config/database');

const dotenv = require('dotenv');

//Set-up configuration file.
dotenv.config({ path: 'backend/config/config.env' });

//Connect to the Mongo Database.
connectToDatabase();

app.listen(process.env.port, () => {
    console.log(`Server started on PORT: ${process.env.port} in ${process.env.NODE_ENV} mode.`);
});