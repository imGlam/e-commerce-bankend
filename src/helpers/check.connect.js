'use strict'

const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECOND = 5000

// count connections
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connections: ${numConnection}`)
}

// check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        // example maximum number of connections based on number of cores
        const maxConnections = numCores * 5

        if(numConnection > maxConnections) 
        {
            console.log(`Connection overloaded`);
        }
    }, _SECOND) // monitor every 5 seconds
}

module.exports = {
    countConnect,
    checkOverload
}
