import {Producto} from '../negocios/producto.js';

class ProductoDAO {

    constructor() {
        this._productos = [];
    }

    get productos() {
        return this._productos;
    }

    set productos(productos) {
        this._productos = productos;
    }

    agregarProducto(producto) {
        if (producto instanceof Producto) {
            this._productos.push(producto);

        } else {
            throw new Error("El objeto no es de tipo Producto");
        }
    }

    eliminarProducto(codigo) {
        let producto = this.buscarProducto(codigo);
        if (producto) {
            let index = this._productos.indexOf(producto);
            this._productos.splice(index, 1);
        }
    }

    buscarProducto(codigo) {
        let producto = this._productos.find(producto => producto.codigo == codigo);
        return producto;
    }

    actualizarProducto(producto) {
        let productoEncontrado = this.buscarProducto(producto.codigo);
        if (productoEncontrado) {
            productoEncontrado.nombre = producto.nombre;
            productoEncontrado.precio = producto.precio;
        }
    }

}

export {ProductoDAO};