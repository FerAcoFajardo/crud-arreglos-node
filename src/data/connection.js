import {Sequelize} from "sequelize";


const sequelize = new Sequelize("productos_db", "root", "12345", {
        host: "localhost",
        dialect: "mysql"
    });


export {sequelize};