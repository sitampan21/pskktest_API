const http = require('http');
const app = require('./index')
const server = http.createServer(app);

server.listen(process.env.PORT || 3000, () => {
    console.log(`server berjalan`);
});