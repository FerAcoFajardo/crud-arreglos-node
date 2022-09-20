export const imprimir = (producto) => {
    console.log(`Producto: ${producto.nombre} - Codigo: ${producto.codigo} - Precio: ${producto.precio} - Stock ${producto.stock} - Fecha de Surtido: ${producto.fechaSurtido}`);
}