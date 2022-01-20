// import express from 'express'

// const app = express()

// app.get('/', (req,res) => res.sendFile(__dirname, 'build', 'index.html'))

// app.listen('4000', () => console.log('Server is running'));


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.sendFile(__dirname, 'build', 'static', 'index.html')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname, 'build', 'static', 'index.html')
})

app.listen(3000)