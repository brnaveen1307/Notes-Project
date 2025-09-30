import notesRoutes from './routes/notesRoutes.js'
import express from 'express'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 5001

const app = express();

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(PORT, function(){
    console.log("Server started on PORT: ", PORT)
})
 