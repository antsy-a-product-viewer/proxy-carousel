const express = require('express');
const server = express();
const path = require('path');
const port = process.env.PORT || 3030;

server.use('/product/:productID', express.static(path.join(__dirname,'./public')));
server.listen(port, () => {
    console.log(`listening on ${port}`);
})