const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    category:{
        type:mongoose.ObjectId,
        ref: 'categorys',
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    photo:{
        data: Buffer,
        contentType:String,
    },
    shipping:{
        type:Boolean,
    }
}, {timestamp: true});

module.exports = mongoose.model('products', productSchema);