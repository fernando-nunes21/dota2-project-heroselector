const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/heroes", require('./routes/heroes.routes'))
app.get('/', (req, res) => {
    res.sendFile(path.join('client/public' + '/index.html'))
  })//Deixar disponivel os arquivos client

app.listen(port, () => {
    console.log(`Bff is running on port ${port}`);
});