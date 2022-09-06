let validarPrecio = (precio) => {
    if(nombre instanceof Number){
        return true;
    }
}


class Producto{
    constructor(nombre, codigo, precio){
        this._nombre = nombre;
        this._codigo = codigo;
        if (validarPrecio(precio)){
            this._precio = precio;
        }else{
            throw new Error("El precio no es un numero");
        }
    }

    get nombre(){
        return this._nombre;
        
    }

    set nombre(nombre){
            this._nombre = nombre;
    }

    get codigo(){
        return this._codigo;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        if(validarPrecio(precio)){
            this._precio = precio;
        }else{
            throw new Error("El precio no es un numero");
        }
    }
}

export {Producto};