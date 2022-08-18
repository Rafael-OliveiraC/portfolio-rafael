var http = require('http');
const express = require('express');
const app = express();

const port = 21127;

const baseDir = `${__dirname}/public`
app.use(express.static(`${baseDir}`))
app.get('/', (req, res) => res.sendfile('index.html' , { root : baseDir } ))

app.listen()