const {default: mongoose} = require("mongoose");

const connection = {isConnected: false};

const connectToDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("already connected to mongodb");
            return;
        }

        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000, // Connection timeout set to 10 seconds
        });    
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error);
        throw new Error("fail to connect to mongodb");
    }
}

export default connectToDB;