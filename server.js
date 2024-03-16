import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const mongodb = process.env.MONGODB_URL;

 mongoose.connect(mongodb).then(()=> {
    console.log("Conexion con la base de datos");
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
}).catch((error) => {console.log(error)});