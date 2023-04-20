
import mongoose from "mongoose";

                              // username and password is received in database
export const Connection = async (username, password) => {
    console.log(username, password)
                                             // database name where @flipkart is written
    const URL = `mongodb+srv://${username}:${password}@flipkart.czkld6p.mongodb.net/?retryWrites=true&w=majority`;
    try {
        // two argument url and object { unified topology is used to manage the connection pool to the MongoDB database. &
        // is important because it ensures that your application is compatible with the latest version of the MongoDB driver,
        // and it allows you to take advantage of the new features and improvements that have been introduced in recent versions of the driver.  }
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('DataBase is Connected Sucessfuly');
    } catch (error) {
        console.log('Error While Connecting with the database', error.message);
    }
}
export default Connection


