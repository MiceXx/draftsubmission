const http = require('http');
const app = require('./app');

const port = 3001;

const server = http.createServer(app);

server.listen(port);

/*

mongoimport --uri "mongodb://draftadmin:draftpassword@draftcluster-shard-00-00-bmzci.mongod
b.net:27017,draftcluster-shard-00-01-bmzci.mongodb.net:27017,draftcluster-shard-00-02-bmzci.mongodb.net:27017/test?ssl=t
rue&replicaSet=draftcluster-shard-0&authSource=admin" --collection baseballplayers --drop --file "C:\draft\baseballdata.json"

mongoimport --uri "mongodb://draftadmin:draftpassword@draftcluster-shard-00-00-bmzci.mongod
b.net:27017,draftcluster-shard-00-01-bmzci.mongodb.net:27017,draftcluster-shard-00-02-bmzci.mongodb.net:27017/test?ssl=t
rue&replicaSet=draftcluster-shard-0&authSource=admin" --collection basketballplayers --drop --file "C:\draft\basketballdata.json"

mongoimport --uri "mongodb://draftadmin:draftpassword@draftcluster-shard-00-00-bmzci.mongod
b.net:27017,draftcluster-shard-00-01-bmzci.mongodb.net:27017,draftcluster-shard-00-02-bmzci.mongodb.net:27017/test?ssl=t
rue&replicaSet=draftcluster-shard-0&authSource=admin" --collection footballplayers --drop --file "C:\draft\footballdata.json"

*/