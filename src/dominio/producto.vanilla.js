import {validarDatoPrecio, validarDatoCodigo, validarDatoNombre,  validarDatoStock, validarTipoDatoFechaSurtido} from './validaciones.js';


class Producto{
    constructor(nombre, codigo, precio, stock, fechaSurtido){
        if(validarDatoNombre(nombre)){

            this._nombre = nombre;
        }else{
            throw new Error("El nombre no es valido");
        }
        if(validarDatoCodigo(codigo)){
            this._codigo = codigo;
        }else{
            throw new Error("El codigo no es valido");
        }

        if(validarDatoStock(stock)){
            this._stock = stock;
        }else{
            throw new Error("El stock no es valido");
        }
        
        if (validarDatoPrecio(precio)){
            this._precio = precio;
        }else{
            throw new Error("El precio no es un numero");
        }

        if(validarTipoDatoFechaSurtido(fechaSurtido)){
            this._fechaSurtido = fechaSurtido;
        }else{
            throw new Error("La fecha no es valida");
        }

        
    }

    get nombre(){
        return this._nombre;
        
    }

    set nombre(nombre){
        if(validarDatoNombre(nombre)){
            this._nombre = nombre;
        }else{
            throw new Error("El nombre no es valido");
        }
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(codigo){
        if(validarDatoCodigo(codigo)){
            this._codigo = codigo;
        }else{
            throw new Error("El codigo no es valido");
        }
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        if(validarDatoPrecio(precio)){
            this._precio = precio;
        }else{
            throw new Error("El precio no es un numero");
        }

        
    }

    imprimir(){
            console.log(`Producto: ${this.nombre} - Codigo: ${this.codigo} - Precio: ${this.precio} - Stock ${this.stock} - Fecha de Surtido: ${this.fechaSurtido}`);
    }
}

export {Producto};