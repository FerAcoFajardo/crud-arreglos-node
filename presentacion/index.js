import { Producto } from "../negocios/producto.js";
import { ProductoDAO } from "../dao/productoDAO.js";
import { question } from "readline-sync";

const productoDAO = new ProductoDAO();

const agregarProducto = () => {
    try{
        let nombre = question("Ingrese el nombre del producto: ");
        let codigo = question("Ingrese el codigo del producto: ");
        let precio = question("Ingrese el precio del producto: ");
        let stock = question("Ingrese el stock del producto: ");
        let fecha = question("Ingrese la fecha de vencimiento del producto: ");
        precio = Number(precio);
        fecha = new Date(fecha);
        stock = Number(stock);
        nombre = String(nombre);
        codigo = String(codigo);

        let producto = new Producto(nombre, codigo, precio, stock, fecha);
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
        producto.imprimir();
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
            let stock = question("Ingrese el nuevo stock del producto: ");
            let fecha = question("Ingrese la nueva fecha de vencimiento del producto: ");
            precio = Number(precio);
            fecha = new Date(fecha);
            stock = Number(stock);
            nombre = String(nombre);
            
            producto.nombre = nombre;
            producto.precio = precio;
            producto.stock = stock;
            producto.fecha = fecha;
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
            producto.imprimir();
        });
    }else{
        console.log("No hay productos registrados");
    }
}


const menu = () => {
    let opcion = 0;
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

        opcion = question("Ingrese una opcion: ");

        if (opcion == 1) {
            agregarProducto();
        }else if(opcion == 2){
            eliminarProducto();
        }else if (opcion == 3){
            buscarProducto();
        }else if (opcion == 4){
            actualizarProducto();
        }else if (opcion == 5){
            listarProductos();
        }

    }while(opcion != 0);
}


menu();
