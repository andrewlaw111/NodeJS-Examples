// General Initialization
require('dotenv').config();
const NODE_ENV = process.env.NODE_ENV || 'development' 

// Dependency Injection for Routers and Service
const ViewRouter = require('./ViewRouter');

const { GroupRouter,
        UserRouter} = require('./routers');

const { GroupService,
        UserService} = require('./services');

let groupService = new GroupService(knex);
let userService = new UserService(knex);

const {app} = require('./utils/init-app')();


app.use('/',new ViewRouter().router());
app.use('/api/groups',new GroupRouter(groupService).router());
app.use('/api/users',new UserRouter(userService).router());


app.listen(8080,()=>{
    console.log("Application started at port:8080");
});