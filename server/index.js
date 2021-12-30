const express = require('express')
const consola = require('consola')
const morgan = require('morgan')

require('dotenv').config()

const app = express()

app.set('trust proxy', true)
app.use(morgan('combined'))

app.use('/', require('./controllers/nuxt'))

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
app.set('port', port)
app.listen(port, host)

consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
})
