import {validarDatoPrecio, validarDatoCodigo, validarDatoNombre,  validarDatoStock, validarTipoDatoFechaSurtido} from '../negocios/validaciones.js';
import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../data/connection.js";

class Producto extends Model {}

Producto.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        max: 100,
        get (){
            const value = this.getDataValue('nombre');
            return value;
        },
        set (nombre){
            if(validarDatoNombre(nombre)){
                this.setDataValue('nombre', nombre);
            }else{
                throw new Error("El nombre no es valido");
            }
        }
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        max: 6,
        get (){
            const value = this.getDataValue('codigo');
            return value;
        },
        set (codigo){
            if(validarDatoCodigo(codigo)){
                this.setDataValue('codigo', codigo);
            }else{
                throw new Error("El codigo no es valido");
            }
        }
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        get (){
            const value = this.getDataValue('precio');
            return value;
        },
        set (precio){
            if(validarDatoPrecio(precio)){
                this.setDataValue('precio', precio);
            }else{
                throw new Error("El precio no es valido");
            }
        }
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        get (){
            const value = this.getDataValue('stock');
            return value;
        },
        set (stock){
            if(validarDatoStock(stock)){
                this.setDataValue('stock', stock);
            }else{
                throw new Error("El stock no es valido");
            }
        }
    },
    fechaSurtido: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        get (){
            const value = this.getDataValue('fechaSurtido');
            return value;
        },
        set (fechaSurtido){
            if(validarTipoDatoFechaSurtido(fechaSurtido)){
                // Format date to iso
                const date = new Date(fechaSurtido);
                const isoDate = date.toISOString().split('T')[0];
                this.setDataValue('fechaSurtido', isoDate);
            }else{
                throw new Error("La fecha no es valida");
            }
        }
    }
}, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos',
    timestamps: false
});


// await Producto.sync({ force: true });

export {Producto};