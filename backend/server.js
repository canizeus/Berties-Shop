const app = require('./app');


const dotenv = require('dotenv');


//Settup config file
dotenv.config({ path: 'backend/config/config.env' });

app.listen(process.env.port, () => {
    console.log(`Server started on PORT: ${process.env.port} in ${process.env.NODE_ENV} mode.`);
});