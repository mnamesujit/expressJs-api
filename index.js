const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send({status: 200, message: 'everything is fine'})
})



app.listen(port, ()=>{
    console.log(`server is runnig at ${port}...`)
})