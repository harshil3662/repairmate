import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log('Server is running on port number ', port);
})