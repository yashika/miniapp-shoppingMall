const mongoose = require('mongoose')

const { ObjectId } = mongoose.schema.Types

const CollectionSchema = new mongoose.Schema({
    productId: ObjectId,
    user: {
        type: ObjectId,
        ref: 'User'
    }
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

CollectionSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }

    next()
})

mongoose.model('Collection', CollectionSchema)