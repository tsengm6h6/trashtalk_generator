const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generator')

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

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const choice = req.body.person
  const trashTalk = generateTrashTalk(choice)
  res.render('index', { text: trashTalk, choice: choice })
})

app.listen(port, () => {
  console.log(`This express app is listening to ${port}`)
})