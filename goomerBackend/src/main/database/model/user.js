const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, require: true },
    groups : [{ type: mongoose.Schema.Types.ObjectId, ref: 'Groups', unique: true }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', userSchema)