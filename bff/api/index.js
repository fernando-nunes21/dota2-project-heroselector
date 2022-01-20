var http = require('http');
const express = require('express');
const path = require('path')
const app = express();
const port = 3001;

const server = http.createServer(app);

app.use(express.json());
app.use("/api/heroes", require('./routes/heroes.routes'))
app.use('/static',express.static(__dirname+"../../../client/build/static"))
app.use('/',express.static(__dirname+"../../../client/build"))
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname+'../../../client/build/index.html'));
})

server.listen(port);