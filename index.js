// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')

// const server = express()

// const PORT = process.env.PORT || 8000

// server.use(express.json())
// server.use(cors())

// server.get('/api/hello', (req, res) => {
//   res.json({
//     message: 'its working!'
//   })
// })

// server.use('*', (req, res) => {
//   res.send(`<h1>Hey</h1>`)
// })

// server.use((err, req, res, next) => { // eslint-disable-line
//   res.status(500).json({
//     message: err.message,
//     stack: err.stack,
//   })
// })

// server.listen(PORT, () => {
//   console.log(`*** listening on port: ${PORT} ***`)
// })

/////////////////////////////////////////

require('dotenv').config()

const server = require('./api/server');
const PORT = process.env.PORT || 8000;

server.use('/', (req, res) => {
  res.send(`<h1>Work in Progress!</h1>`)
})

server.listen(PORT, () => {
  console.log(`*** listening on port: ${PORT} ***`)
})