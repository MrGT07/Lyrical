console.log('-------------Hello World!------------')

const express = require('express') // Build an express server for REST API
const bodyparser = require('body-parser') // Language parser JSON data easily
const cors = require('cors') //
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

// Request Types: get, post, put, patch, delete
app.get('/status', (req, res) => {
    res.send({
        message: 'hello world'
    })
})

app.listen(process.env.PORT || 8081) 
