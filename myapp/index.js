const express = require('express'),
  bodyParser = require('body-parser'),
  fs = require('fs').promises,
  fileUpload = require('express-fileupload')
const app = express()
const port = process.env.PORT || 3000 

let colors = { r: 255, g: 0, b: 0 }
let positions = []

// We are middleware - JBG
// I handle serving static pages - JBG
app.use(express.static('public'))

// We process POST body data - JBG
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))

// I handle file uploads - JBG
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}))

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

async function moveFile(path, fileName) {
    await fs.rename(path, `public/${fileName}`)
}

// I handle file uploads - JBG
app.post('/files', async (req, res, next) => {
  try {
    for(const [key, file] of Object.entries(req.files)) {
      console.log(file.tempFilePath, file.name)
      await moveFile(file.tempFilePath, file.name)
      res.send('We got your file!')
    }
  } catch(e) {
    res.status(500).send(e)
  }
})

// I handle GET requests from Unity for positions - JBG
app.get('/postcoords', (req, res) => {
  console.log("Unity says hello..", positions)
  // const file = await fs.readFile('alice.txt', 'utf8')
  res.send(JSON.stringify({positions: positions}))
})

// I handle POST requests from Unity of positions - JBG
app.post('/postcoords', async (req, res) => {
  let position = {x: req.body.x, y: req.body.y, z: req.body.z}
  positions.push(position)
  try {
    console.log("Unity talked to me....", req.body.x, req.body.y, req.body.z)
    console.log(position)
    res.send('position:' + position)
  } catch(e) {
    res.status(500).send(e)
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

