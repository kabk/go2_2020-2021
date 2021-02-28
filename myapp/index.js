const express = require('express'),
  bodyParser = require('body-parser')
  fs = require('fs').promises
const app = express()
const port = process.env.PORT || 3000 

let colors = { r: 255, g: 0, b: 0 }

// We are middleware - JBG
// I handle serving static pages - JBG
app.use(express.static('public'))

// We process POST body data - JBG
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

// I handle GET requests - JBG
app.get('/', (req, res) => {
  //console.log("Unity says hello...")
  //const file = await fs.readFile('alice.txt', 'utf8')
  res.send(JSON.stringify(colors))
})

// I handle POST requests - JBG
app.post('/', async (req, res) => {
  try {
    //console.log("Unity talked to me....", req.body.x, req.body.y, req.body.z)
    console.log(req.body)
    colors = req.body
    //await fs.writeFile('filename.txt', req.body.alice)
    res.send('POST request to the homepage')
  } catch(e) {
    res.status(500).send(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

