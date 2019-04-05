const express = require('express')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')

const ctrl = require('./controllers/controller')

const app=express()

const { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db)
  console.log('DB is connected')
})

app.get('/api/houses', ctrl.seeAll)
app.post('/api/houses', ctrl.createHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)



app.listen(SERVER_PORT, () => {
  console.log('Listening on port:', SERVER_PORT)
})