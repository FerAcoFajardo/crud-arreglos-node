import {Producto} from '../../dominio/producto.js';

class ProductoDAO {


    async agregarProducto(producto) {
        try{
            const resultado = await Producto.create({
                nombre: producto.nombre,
                codigo: producto.codigo,
                precio: producto.precio,
                stock: producto.stock,
                fechaSurtido: producto.fechaSurtido
            });
        }catch(error){
            console.log(error);
        }
    }

    async eliminarProducto(codigo) {
        try{
            const resultado = await Producto.destroy({
                where: {
                    codigo: codigo
                }
            });
            return resultado;
        }catch(error){
            console.log(error);
        }
    }

    async buscarProducto(codigo) {
        try{
            const resultado = await Producto.findOne({
                where: {
                    codigo: codigo
                }
            });
            return resultado;
        }catch(error){
            console.log(error);
        }
    }

    async actualizarProducto(producto) {
        if(producto.id === undefined){
            throw new Error("El producto no existe");
        }
        try{
            const resultado = await Producto.update({
                nombre: producto.nombre,
                precio: producto.precio,
                stock: producto.stock,
                fechaSurtido: producto.fechaSurtido
            },{
                where:{
                    id: producto.id
                }
            });
            return resultado;
        }catch(error){
            console.log(error);
        }
    }

    async listarProductos(){
        try{
            const resultado = await Producto.findAll();
            return resultado;
        }catch(error){
            console.log(error);
        }
    }

}

export {ProductoDAO};