const express = require('express')
const mongodb = require("mongodb")
const path = require('path')

let port = 3000
let dbase

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

let connectionString = "mongodb+srv://bookMySpotUser:Wz1vPbdvHiCQUMYr@cluster0-yxyj0.azure.mongodb.net/BookMySpot?retryWrites=true&w=majority"
mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    console.log("Database connected successfully")
    dbase = client.db()
    app.listen(port)
})
// app.listen(port)

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/e_parking.html'))
})

app.get("/signIn", function (req, res) {
    res.sendFile(path.join(__dirname + '/hackdu.html'))
})

app.get("/signUp", function (req, res) {
    res.sendFile(path.join(__dirname + '/sign_up.html'))
})

app.post("/register", function (req, res) {
    let User = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.psw
    }
    dbase.collection('SignUpDetails').insertOne(User)
    console.log("Sign In success")
    res.sendFile(path.join(__dirname + '/final_page.html'))
})

app.post("/login", function (req, res) {
    return new Promise((resolve, reject) => {
        dbase.collection('SignUpDetails').findOne({ username: req.body.username }).then((dbUser) => {
            if (dbUser && req.body.psw === dbUser.password) {
                resolve(`Welcome ${dbUser.username}!`)
                res.sendFile(path.join(__dirname + '/final_page.html'))
            } else {
                reject("Invalid username / password.")
                res.sendFile(path.join(__dirname + '/e_parking.html'))
            }
        }).catch((err) => {
            reject(err)
        })
    })
})

module.exports = app