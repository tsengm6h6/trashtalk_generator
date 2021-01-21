// Include packages
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generator')

// Set the port
const port = 3000

// Set template engine as handlebars, use main.js as default layout
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    ifChecked: function (option, value) {
      if (option === value) {
        return 'checked';
      }
    }
  }
}))
app.set('view engine', 'handlebars')

// Set static files route
app.use(express.static('public'))
// Set bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// Set the routes and handle request and response
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const choice = req.body.person
  const trashTalk = generateTrashTalk(choice)
  res.render('index', { text: trashTalk, choice: choice })
})

// Listening to the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost/${port}`)
})