const { Schema } = require('mongoose')
const { model } = require('mongoose')

const categorieScheme = new Schema({
    description: {
        type: String
    }
}, 
    {
        timestamps: true,
        versionKey: false
    })

module.exports = model('category', categorieScheme)