import express from 'express'

const app = express()

app.use(function(req,res,next){
    console.log("Middleware is running")
    next();
})

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/profile', (req, res) => {
  res.send('Hello to profile')
})

app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}`)
})
app.listen(3000)