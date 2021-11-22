const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use("/api", require('./routes/heroes.routes'))


app.listen(port, () => {
    console.log(`Bff is running on port ${port}`);
});