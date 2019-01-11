/**
 * Build Groups routes
 * @param {Router} router 
 */
const groupsApi = router => {
    // Require Groups model 
    const Groups = require('../database/model/groups')

    // Require User model 
    const User = require('../database/model/user')
    
    /**
     * GET Groups
     */
    router.get('/groups', (req, res) => {
        Groups.find({ }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * GET single Groups by id
     */
    router.get('/groups/:id', (req, res) => {
        const { id } = req.params

        Groups.findOne({ _id: id }, (err, docs) => {
            handleResult(res, err, docs)
        })
    })

    /**
     * GET Users from Group
     */
    router.get('/groups/:id/users', (req, res) => {
        const { id } = req.params

        Groups.findOne({ _id: id })
            .populate('members')
            .exec((err, docs) => {
                handleResult(res, err, docs.members)
            })
    })

    /**
     * POST New Groups
     */
    router.post('/groups', (req, res) => {

        const { members } = req.body

        if (!members || members.length < 2) handleResult(res, { message: "Invalid number of members" })

        const newGroups = new Groups({ ...req.body })
        
        newGroups.save(err => {
            handleResult(res, err, newGroups)
            for(let i in members) {
                User.findByIdAndUpdate({ _id: members[i] }, { $push: { groups: newGroups._id } }, (err, user) => {
                    handleResult(res, err, { group: doc, user })
                })
            }
        })
    })
    

    /**
     * PUT Update a existing Groups
     */
    router.put('/groups/:id', (req, res) => {
        const { id } = req.params

        Groups.findByIdAndUpdate({ _id: id }, { ...req.body }, (err, doc) => {
            handleResult(res, err, doc)
        })
    })

    /**
     * PUT Update a existing Groups
     */
    router.put('/groups/:id/addUser', (req, res) => {
        const { id } = req.params
        const { userId } = req.body

        Groups.findByIdAndUpdate({ _id: id }, { $push: { members: userId } }, (err, doc) => {
            User.findByIdAndUpdate({ _id: userId }, { $push: { groups: id } }, (err, user) => {
                handleResult(res, err, { group: doc, user })
            })
        })
    })

    /**
     * DELETE Existing Groups
     */
    router.delete('/groups/:_id', (req, res) => {
        const { _id } = req.params

        Groups.findByIdAndRemove({ _id }, (err, doc) => {
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

module.exports = groupsApi