import {Sequelize} from "sequelize";


const sequelize = new Sequelize("productos", "root", "12345", {
        host: "localhost",
        dialect: "mysql"
    });



export {sequelize};