const config = require('./config/config').get(process.env.NODE_ENV);
const dbconnection = mongoose.createConnection(config.mongo.billing);