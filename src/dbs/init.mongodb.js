'use strict'

const mongoose = require('mongoose')

const connectString = `mongodb://127.0.0.1:27017`
const {countConnect} = require('../helpers/check.connect')

class Database 
{
    constructor()
    {
        this.connect()
    }

    //connect
    connect(type='mongodb')
    {
        if(1===1)
        {
            mongoose.set('debug', true)
            mongoose.set('debug', {color : true})
        }
        mongoose.connect(connectString, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
          })
          .then(() => {
            console.log(`Mongodb connected successfully`)
            countConnect()
            }
          )
        
          .catch((err) => console.error(err))
    }

    static getInstance()
    {
        if(!Database.instance) 
        {
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb
