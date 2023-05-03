export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    foto: String;

    constructor(nombre: String,apellido: String,email: String,foto: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.foto = foto
    }
}