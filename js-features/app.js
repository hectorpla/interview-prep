const express = require('express')

const app = express()

app.get('/number/:val', (req, res) => {
    res.json({val: req.params.val})
})

const port = process.env.PORT || 6650
console.log("listening on " + port)
app.listen(port)