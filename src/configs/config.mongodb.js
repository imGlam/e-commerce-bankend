'use strict'

// level 0 

const dev = {
    app : { 
        port : process.env.DEV_APP_PORT || 3004,
    },
    db : { 
        host : process.env.DEV_DB_HOST || 'localhost',
        port : process.env.DEV_DB_PORT || 27017,
    }
}

// level 1

const prod = {
    app : {
        port : process.env.PROD_APP_PORT || 3004
    },
    db : {
        host : process.env.PROD_DB_HOST || 'localhost',
        port : process.env.PROD_DB_PORT || 27017,
    }
}

const config = { 
    dev, 
    prod
}
const env = process.env.NODE_ENV || 'dev'

module.exports = config[env]

