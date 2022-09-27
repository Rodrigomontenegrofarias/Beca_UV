import server from './server'

server.listen(server.get('port'))

console.log('server on port', server.get('port'))