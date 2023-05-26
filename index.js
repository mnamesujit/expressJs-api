const { render } = require('ejs')
const express = require('express')
const path = require( 'path')
const app = express()
const port = 4000

// setting ejs path
app.set("view engine", "ejs")

// Getting path of static files directory
const staticPath = path.join(__dirname, "./public")
console.log(staticPath)

// Serving static files in Express using express.static middleware
app.use(express.static(staticPath))


// default GET request for '/' path
app.get('/', (req, res) => {
    res.send({status: 200, message: 'everything is OK'})
})

// For handling bad requests if path does'nt exists
app.get('*', (req, res) =>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`server is runnig at ${port}...`)
})