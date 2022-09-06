const validarDatoPrecio = (precio) => {
    if(precio > 0 && typeof(precio ) === 'number'){
        return true;
    }
}

const validarDatoCodigo = (codigo) => {
    if(codigo.length === 6 && typeof(codigo) === 'string'){
        return true;
    }
}

const validarDatoNombre = (nombre) => {
    if(nombre.length > 0 && nombre.length < 100 && typeof(nombre) === 'string'){
        return true;
    }
}

const validarDatoStock = (stock) => {
    if(stock > 0 && typeof(stock) === 'number'){
        return true;
    }
}

const validarTipoDatoFechaSurtido = (fechaSurtido) =>{
    if(fechaSurtido instanceof Date){
        return true;
    }
}


export {validarDatoPrecio, validarDatoCodigo, validarDatoNombre,  validarDatoStock, validarTipoDatoFechaSurtido};