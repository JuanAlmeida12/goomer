const express = require('express')

module.exports = (server) => {

    // API Routes
    const router = express.Router()
    server.use('/api/v1', router)

    // User Routes
    require('./api/userAPI')(router)

    // User Groups
    require('./api/groupsAPI')(router)
    
}