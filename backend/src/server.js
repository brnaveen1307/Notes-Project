import notesRoutes from './routes/notesRoutes.js'
import express from 'express'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5001

const app = express();
app.use(express.json()) // this middleware will parse JSON bodies: req.body

// simple custom middleware
app.use(function(req, res, next){
    console.log(`Request Method is ${req.method} and Request URL is ${req.url}`)
    next()
})

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(PORT, function(){
    console.log("Server started on PORT: ", PORT)
})
 