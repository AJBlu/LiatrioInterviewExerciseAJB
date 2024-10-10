const express = require('express')
const app = express()
const port = 80
app.use(express.json())

//creating json object
const sendThis = {
    message: "My name is Alexander Blue",
    timestamp: Date.now()
};

app.get('/', (req, res) => {
    res.send(JSON.stringify(sendThis))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
