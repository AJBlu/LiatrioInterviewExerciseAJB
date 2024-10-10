const express = require('express')
const app = express()
const port = 80
app.use(express.json())

//creating json object


app.get('/', (req, res) => {
    //putting sendThis in the get request so it
    const sendThis = {
        message: "My name is Alexander Blue",
        timestamp: Date.now()
    };
    res.json(sendThis)
    //res.send(JSON.stringify(sendThis))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
