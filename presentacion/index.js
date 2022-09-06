import { Producto } from "../negocios/producto.js";
import { ProductoDAO } from "../dao/productoDAO.js";
import { question } from "readline-sync";

const productoDAO = new ProductoDAO();

const agregarProducto = () => {
    try{
        let nombre = question("Ingrese el nombre del producto: ");
        let codigo = question("Ingrese el codigo del producto: ");
        let precio = question("Ingrese el precio del producto: ");
        let producto = new Producto(nombre, codigo, precio);
        productoDAO.agregarProducto(producto);
    }catch(error){
        console.log(error.message);
    }
}

const eliminarProducto = () => {
    let codigo = question("Ingrese el codigo del producto: ");
    productoDAO.eliminarProducto(codigo);
}

const buscarProducto = () => {
    let codigo = question("Ingrese el codigo del producto: ");
    let producto = productoDAO.buscarProducto(codigo);
    if(producto){
        console.log(producto);
    }else{
        console.log("El producto no existe");
    }
}

const actualizarProducto = () => {
    try{
        let codigo = question("Ingrese el codigo del producto: ");
        let producto = productoDAO.buscarProducto(codigo);
        if(producto){
            let nombre = question("Ingrese el nuevo nombre del producto: ");
            let precio = question("Ingrese el nuevo precio del producto: ");
            producto.nombre = nombre;
            producto.precio = precio;
            productoDAO.actualizarProducto(producto);
        }else{
            console.log("El producto no existe");
        }
    }catch(error){
        console.log(error.message);
    }
}

const listarProductos = () => {
    let productos = productoDAO.productos;
    if(productos.length > 0){
        productos.forEach(producto => {
            console.log(producto);
        });
    }else{
        console.log("No hay productos registrados");
    }
}


const menu = () => {
    do{
        console.log(`
        
        `);
        console.log("1. Agregar producto");
        console.log("2. Eliminar producto");
        console.log("3. Buscar producto");
        console.log("4. Actualizar producto");
        console.log("5. Listar productos");
        console.log("0. Salir");
        console.log(`
        
        `);

        let opcion = question("Ingrese una opcion: ");

        if (opcion == 1) {
            agregarProducto();
        }else if(option == 2){
            eliminarProducto();
        }else if (option == 3){
            buscarProducto();
        }else if (option == 4){
            actualizarProducto();
        }else if (option == 5){
            listarProductos();
        }

    }while(opcion != 0);
}


menu();
