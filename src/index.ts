import *  as http from 'http'

import {app} from './app'

const server = http.createServer(app);

server.listen(3000, () => {
   console.log('server listen 3000!!!')
});
