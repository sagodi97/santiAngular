const express = require('express'), path = require('path');

const app = express();

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 8080);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
})

console.log('Console listening papo!');