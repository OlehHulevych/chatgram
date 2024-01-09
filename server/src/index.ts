import express, {Express, Request, Response} from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import bodyParser = require('body-parser');
const cors = require('cors')
import { Server } from 'socket.io';
import { createServer } from 'http';

dotenv.config()


const app:Express = express();
const port = process.env.PORT
const server = createServer(app)
const io = new Server(server)

const corsOptions = {
    origin: "http://localhost:5173"
}

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors(corsOptions));




const DB_URI:any = process.env.DB_URI
mongoose.connect(DB_URI).then(()=>console.log("The database is connected succesfully"))
.catch((error)=>{console.log("Something went wrong.There are error:"+error)})




io.on('connection', (socket)=>{
    console.log(`Socket ${socket.id} connected`)

    socket.on('sendMessage', (message)=>{
        io.emit('message', message)
    })

    socket.on('disconnect',()=>{
        console.log(`Socket  ${socket.id} disconnected`)
    })

    
})



server.listen(port, ()=>{
    console.log("The server is running")
})

