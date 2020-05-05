const express = require('express')
const app =     express()
const port = 8080
app.get('/api', (req, res) => {
    console.log('/api')
    res.send('/api works')
})

app.listen(port, () => {
    console.log('Listening port ' + port)
})