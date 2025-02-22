require('dotenv').config()
const mongoose=require("mongoose")
const connectionString = `${process.env.MONGODB_URI}/ClusterEcomm`;
exports.connectToDB=async()=>{
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connected to DB');
    } catch (error) {
        console.log(error);
    }
}