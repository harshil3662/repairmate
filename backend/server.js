import dotenv from 'dotenv'
import connectDB from './db/db.js';
import app from './app.js';

dotenv.config({
    path: '../.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT, ()=> {
        console.log(`App is running on port no ${process.env.PORT}}`);
    })
})
.catch((error)=>{
    console.log("MongoDB connection Error: ",error);
});
