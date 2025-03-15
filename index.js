const server = require('./Service.js')
require('dotenv').config();
const PORT = process.env.PORT || 3000

server.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`)
})