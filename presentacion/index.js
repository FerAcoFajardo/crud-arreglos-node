// import { Producto } from "../src/negocios/producto.js";
import { Producto, imprimir } from "../src/dominio/producto.js";
import { ProductoDAO } from "../src/data/repositories/productoRepository.js";
import { question } from "readline-sync";

const productoDAO = new ProductoDAO();

const agregarProducto = async () => {
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
        await productoDAO.agregarProducto(producto);
    }catch(error){
        console.log(error.message);
    }
}

const eliminarProducto = async () => {
    let codigo = question("Ingrese el codigo del producto: ");
    productoDAO.eliminarProducto(codigo);
}



const buscarProducto = async () => {
    let codigo = question("Ingrese el codigo del producto: ");
    let producto = productoDAO.buscarProducto(codigo);
    if(producto){
        imprimir(producto);
    }else{
        console.log("El producto no existe");
    }
}

const actualizarProducto = async () => {
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

const listarProductos = async () => {
    let productos = productoDAO.productos;
    if(productos.length > 0){
        productos.forEach(producto => {
            imprimir(producto);
        });
    }else{
        console.log("No hay productos registrados");
    }
}


const menu = async () => {
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
            await agregarProducto();
        }else if(opcion == 2){
            await eliminarProducto();
        }else if (opcion == 3){
            await buscarProducto();
        }else if (opcion == 4){
            await actualizarProducto();
        }else if (opcion == 5){
            await listarProductos();
        }

    }while(opcion != 0);
}


await menu();
