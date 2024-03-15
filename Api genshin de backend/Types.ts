export type Personaje = {
    nombre: string
    elemento: string
    region: string
    tipo_arma: string
    armacaracteristica: string
    genero: string
    imagen: string
    numero_estrellas: number
    constelacion: string
    platillo: string
    descripcion: string
}

export enum ELEMENTOS
{
    Anemo, Geo, Electro, Dendro, Hydro, Pyro, Cryo 
}

export enum TIPO_ARMA
{
    Espada, Lanza, Mandoble, Arco, Catalizador
}

export enum REGION
{
    Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Nathlan, Snezhnaya
}

export enum GENERO
{
    Masculino, Femenino   
}

