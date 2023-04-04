const app = require("./src/app");
const port = process.env.PORT || 3004

const server = app.listen( port, () => {
        console.log(`E-commerce server is running on ${port}`)
})

process.on('SIGINT' , () => {
    server.close(() => console.log(`Exit server`))
    // notify.send( ping ...)
})


