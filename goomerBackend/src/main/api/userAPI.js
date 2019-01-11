/**
 * Build User routes
 * @param {Router} router 
 */
const userApi = router => {
    // Require User model 
    const User = require('../database/model/user')

    /**
     * GET Users
     */
    router.get('/user', (req, res) => {
        User.find({ }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * GET single User by username
     */
    router.get('/user/:username', (req, res) => {
        const { username } = req.params

        User.findOne({ username }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * GET User groups
     */
    router.get('/user/:username/groups', (req, res) => {
        const { username } = req.params

        User.findOne({ username }).populate('groups').exec((err, docs) => {
            handleResult(res, err, docs.groups)
        })
    })

    /**
     * POST New User
     */
    router.post('/user', (req, res) => {

        const newUser = new User({ ...req.body })

        newUser.save(err => {
            handleResult(res, err, newUser)
        })
    })

    /**
     * PUT Update a existing User
     */
    router.put('/user/:username', (req, res) => {
        const { username } = req.params

        User.updateOne({ username }, { ...req.body }, (err, doc) => {
            handleResult(res, err, doc)
        })
    })

    /**
     * DELETE Existing User
     */
    router.delete('/user/:username', (req, res) => {
        const { username } = req.params

        User.deleteOne({ username }, (err, doc) => {
            handleResult(res, err, doc)
        })
    })
}

/**
 * Handle the response
 * @param {Response} res 
 * @param {Error} err 
 * @param {object} docs 
 */
const handleResult = (res, err, docs) => {
    if(!!err) {
        return res.status(400).json(err.message)
    }

    return res.status(200).json(docs)
}

module.exports = userApi