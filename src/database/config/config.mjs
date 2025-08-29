export default {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOSTNAME_LOCAL,
        port: process.env.DB_PORT,
        dialect: "mysql",
        logging:false,
        dialectModule: require('mysql2'),
    },
}
