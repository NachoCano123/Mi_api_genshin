import express from "npm:express@4.18.2"
import mongoose from "npm:mongoose@7.6.3"

import {load} from "https://deno.land/std@0.204.0/dotenv/mod.ts"
import { crearpersonaje } from "./crearPersonaje.ts"

const env= await load();

const MONGO_URL= env.MONGO_URL || Deno.env.get("MONGO_URL");

const PORT= env.PORT || Deno.env.get("PORT") || 3100

if (!MONGO_URL) {
  console.log("No url valida de mongo");
  throw new Error ("No valido");
}

try {
  await mongoose.connect(MONGO_URL);
  console.log("Conectado con exito a la base de datos")

  const app=express();
  app.use(express.json());
  
  //endpoints
  app.post("/crear/personaje", crearpersonaje)

  app.listen(PORT, ()=> {
    console.log("Escuchando por el puerto " + PORT);
  })
} catch (e) {
  console.error(e);
}
