const express = require('express')
const { version } = require('./package.json')
const app = express()

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send({ version })
})

app.use(express.static('dist'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

module.exports = app
