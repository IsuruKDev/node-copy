
const ncp = require('ncp').ncp;

ncp.limit = 16;

const source = './internal-app/node_modules';
const destination = './node_modules';


ncp(source, destination, (error)=>{

    if(error) return console.error(error);

    console.log('Done!');

});

