export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    foto: string;

    constructor(nombre: string,apellido: string,email: string,foto: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.foto = foto
    }
}