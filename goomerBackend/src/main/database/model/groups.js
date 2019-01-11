const mongoose = require('mongoose')

const groupsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', unique: true}],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Groups', groupsSchema)