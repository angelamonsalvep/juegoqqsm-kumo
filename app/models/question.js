const { Schema } = require('mongoose')
const { Model } = require('mongoose')
const category = Model('category')

const questionScheme = new Schema({
    description: {
        type: String
    },
    difficulty_level: {
        type: String
    }, 
    category: { type: Schema.ObjectId, ref: "category" }
}, 
    {
        timestamps: true,
        versionKey: false
    })

module.exports = Model('question', questionScheme)