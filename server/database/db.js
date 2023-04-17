
import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkart.czkld6p.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DataBase is Connected Sucessfuly');
    } catch (error) {
        console.log('Error While Connecting with the database', error.message);
    }
}
export default Connection 
