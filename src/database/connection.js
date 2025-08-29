import { Sequelize } from "sequelize";
import config from "./config/config.mjs";


let sequelize
if (process.env.NODE_ENV === 'development') {
    sequelize = new Sequelize(config.development);
}else{
    sequelize= new Sequelize(config.production);
}

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
    } catch (err) {
        console.error("Unable to connect to the database:", err);
    }
})();


const connection = sequelize;
export default connection;
