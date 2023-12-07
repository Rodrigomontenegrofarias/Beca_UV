import express from 'express'
import config from './config'
import becasRoutes from './routes/becas.routes'

const cors = require('cors')

const server = express()

server.set('port', config.port)

server.use(cors({origin: config.frontend}))

//middlewares
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use(becasRoutes)

export default server