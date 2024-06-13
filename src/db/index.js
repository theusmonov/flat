import { Sequelize } from "sequelize";
import config from "../shared/config/index.js";


const dbConnect = new Sequelize(config.db.name, config.db.username, config.db.password, {
    dialect: "postgres",
    host: config.db.host,
    port: config.db.port,
    logging: false
})

export default dbConnect;