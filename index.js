const s = require('./server');
require('dotenv').config();

//bind socket to service on local host
//tell kernel to accept requrests to this socket
const port = process.env.PORT || '8000';

s.listen(port, () => console.log(`server running on ${port}`));