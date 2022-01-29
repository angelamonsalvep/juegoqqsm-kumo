const { Schema } = require('mongoose')
const { Model } = require('mongoose')

const categorieScheme = new Schema({
    description: {
        type: String
    }
}, 
    {
        timestamps: true,
        versionKey: false
    })

module.exports = Model('category', categorieScheme)