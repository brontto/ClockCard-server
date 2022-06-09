const app = require('./app')
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)

app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD!</h1>')
})

app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
})