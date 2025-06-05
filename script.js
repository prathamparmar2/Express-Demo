import express from 'express'

const app = express()

app.use(function(req,res,next){
    console.log("Middleware is running")
    next();
})

app.use(express.static("public"))

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  throw Error("something wrong")
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/profile', (req, res) => {
  res.send('Hello to profile')
})

app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}`)
})

app.use(function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
})

app.listen(3000)