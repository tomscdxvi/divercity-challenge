const express = require('express');
const app = express(); 

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {

    res.json(users)
})

app.post('/users', (req, res) => {

    const user = { username: req.body.username, password: req.body.password } 

    users.push(user);

    res.status(201).send();

})

app.post('/users/login', (req, res) => {

    const user = users.find(user => user.username = req.body.username)

    if(user == null) {
        return res.status(400).send('Invalid username/password or Account does not exist.')
    }

    try{
        if(req.body.password == user.password) {
            res.send('Success') 
        } else {
            res.send('Not Allowed')
        }
    } catch {
        res.status(500).send()
    }

})

app.listen(5000);