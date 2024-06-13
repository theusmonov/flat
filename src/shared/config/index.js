import "dotenv/config.js"


const config = {
    port: process.env.APP_PORT || 7896,
    db: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        password: process.env.DB_PASSWORD,
        username: process.env.DB_USERNAME,
        name: process.env.DB_NAME
    },
    jwt: {
        secret_key: process.env.SECRET_KEY || "OK",
        refresh_key: process.env.REFRESH_KEY || "UY"
    }
}

export default config;