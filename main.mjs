import express from "express"
import cors from "cors"
//import connection from "./db.mjs";
import { insertarUsuario } from "./db.mjs"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/servicios/", postServicios)
app.get("/servicios/", getServicios)

app.listen(8000, ()=>console.log("Funciona..."))

function postServicios(req,res) {
    try {
        connection.query(insertarUsuario, [ req.body.name, req.body.email, req.body.contrasena]);
        res.sendStatus(201)
    } catch (error) {
        console.error(error);
        res.sendStatus(500)
    }
}

function getServicios(req,res) {
    
}