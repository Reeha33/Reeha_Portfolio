// eslint-disable-next-line import/no-anonymous-default-export
export default {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOSTNAME_LOCAL,
        port: process.env.DB_PORT,
        dialect: "mysql",
        logging:false,
        dialectModule: require('mysql2')
    },
    production: {
        username: process.env.NEXT_PUBLIC_DB_PRODUCTION_USERNAME,
        password: process.env.NEXT_PUBLIC_DB_PASSWORD_PROD,
        database: process.env.NEXT_PUBLIC_DB_NAME_PRODUCTION,
        host: process.env.NEXT_PUBLIC_DB_HOSTNAME,
        port: 3306,
        logging: false,
        dialect: "mysql",
        dialectModule: require('mysql2'),
    },
}
