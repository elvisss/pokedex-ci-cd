const express = require('express')
const path = require('path')
const { version } = require('./package.json')
const app = express()

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send(version)
})

app.use(express.static(path.join(__dirname, 'dist')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

module.exports = app
