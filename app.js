const express = require('express')
const app = express()
const port = 8080

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//http://localhost:3000/12
//app.get('/:id'
app.get('/', (req, res) => {
    res.json({
        message:"hello world"
    })
})


app.post('/', function(req, res, next) {

    if(req.is('application/json')){
        console.log(req.body)
        res.send(req.body)
    }else {
        res.status(400).send('Bad Request')
    }
})

app.listen(port, () => {
    console.log(`example app listning at ${port}`)
})