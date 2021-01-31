const express = require('express'),
  bodyParser = require('body-parser')
  fs = require('fs').promises
const app = express()
const port = 3000

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

app.get('/', (req, res) => {
  //const file = await fs.readFile('alice.txt', 'utf8')
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  try {
    await fs.writeFile('filename.txt', req.body.alice)
    res.send('POST request to the homepage')
  } catch(e) {
    res.status(500).send(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

