//@ts-ignore
import {Request, Response} from "npm:express@4.18.2"
import { PersonajeMode1Type } from "./Personaje.ts"
import { ELEMENTOS, GENERO, REGION, TIPO_ARMA } from "./Types.ts"

export const crearpersonaje = async(req: Request, res:Response) => {
    try
    {
    const {nombre, elemento, region, tipo_arma, armacaracteristica, genero, imagen, numero_estrellas, constelacion, platillo, descripcion} = req.body 

    if(!nombre || !elemento || !region || !tipo_arma || !armacaracteristica || !genero
        || !imagen || !numero_estrellas || !constelacion || !platillo || !descripcion){
        res.status(500).send("Faltan datos")
        return
    }

    if(!Object.values(ELEMENTOS).includes(elemento)) 
    {
        res.status(500).send("elemento no válido")
        return
    }

    if(!Object.values(TIPO_ARMA).includes(tipo_arma)) 
    {
        res.status(500).send("tipo de arma no válido")
        return
    }

    if(!Object.values(REGION).includes(region)) 
    {
        res.status(500).send("region no válida")
        return
    }

    if(!Object.values(GENERO).includes(genero)) 
    {
        res.status(500).send("genero no válido")
        return
    }

    if(numero_estrellas !== 4 && numero_estrellas !== 5 ) 
    {
        res.status(500).send("numero de estrellas no válido")
        return
    }

    if(typeof nombre !== "string" || typeof elemento !== "string" || typeof region !== "string" || 
    typeof tipo_arma !== "string" || typeof armacaracteristica !== "string" || typeof genero !== "string" || 
    typeof imagen !== "string" || typeof numero_estrellas !== "number" || typeof constelacion !== "string" || 
    typeof platillo !== "string" || typeof descripcion !== "string")
    {
        res.status(500).send("Tipo de dato invalido")
        return
    }

    const exists = await PersonajeMode1Type.findOne({nombre}).exec()
    if(exists){
        res.status(400).send("Ya existe ese personaje")
        return
    }

    const person = await PersonajeMode1Type.create({
        nombre,
        elemento,
        region,
        tipo_arma,
        armacaracteristica,
        genero,
        imagen,
        numero_estrellas,
        constelacion, 
        platillo, 
        descripcion
    })
/*
    Plantilla de ejemplo para crear personaje
{
    "nombre": "Kaedehara Kazuha",
    "elemento": "Anemo",
    "region": "Inazuma",
    "tipo_arma": "Espada",
    "armacaracteristica": "Juramento por la Libertad",
    "genero": "Masculino",
    "imagen": "https://static.wikia.nocookie.net/gen-impact/images/a/a5/Carta_de_personaje_Kaedehara_Kazuha.png/revision/latest?cb=20210607112352&path-prefix=es",
    "numero_estrellas": 5,
    "constelacion": "Acer Palmatum",
    "platillo": "Belleza multiclima",
    "descripcion": "El verdadero arconte anemo"
}
*/

    res.send({
        nombre,
        elemento,
        region,
        tipo_arma,
        armacaracteristica,
        genero,
        imagen,
        numero_estrellas,
        constelacion,
        platillo,
        descripcion
    })
}
catch(e)
{
    res.status(500).send(e)
}
}
