import mongoose from "npm:mongoose@7.6.3"
import { Personaje } from "./Types.ts"

const Schema = mongoose.Schema

const PersonajeSchema = new Schema ({
    nombre: {type: String, required: true, unique: true},
    elemento: {type: String, required: true},
    region: {type: String, required: true},
    tipo_arma: {type: String, required: true},
    armacaracteristica: {type: String, required: true},
    genero: {type: String, required: true},
    imagen: {type: String, required: true},
    numero_estrellas: {type: String, required: true},
    constelacion: {type: String, required: true},
    platillo: {type: String, required: true},
    descripcion: {type: String, required: true}
}, {
    timestamps: true, 
})

export type PersonajeMode1Type = mongoose.Document & Omit<Personaje, "id">

export const PersonajeMode1Type = mongoose.model<PersonajeMode1Type>(
    "personaje",
    PersonajeSchema
)