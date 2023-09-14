const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine }  = require('express-handlebars')
const app = express()
const port = 3000


//static file
app.use(express.static(path.join(__dirname,'public')))

//http logger
// app.use(morgan('combined'))

//Template engine
app.set('view engine', 'hbs')

app.engine('hbs', engine({
  extname: '.hbs'
}) )
app.set('views',path.join(__dirname,'resources/views'))

//route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/product', (req, res) => {
  res.render('product');
})

app.get('/search', (req, res) => {
  console.log(req.query.q)
  res.render('search')
})

app.get('/news', (req, res) => {
  res.render('news');
})


//127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})