import mongoose from 'mongoose';

let isConnected = false; //track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("Mongo is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true
        console.log('Mongo db connected')
    } catch (error) {
        console.log(error)
    }
}