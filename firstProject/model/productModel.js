const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productModel = new schema(
    {
        productName : {
            type:String,
            default:""
        },
        cost:{
            type:Number,
            default:0
        },
        count:{
            type:Number,
            default:0
        },
        brand:{
            type:String
        },
        description:{
            type:String
        },
        imageUrl:{
            type:String
        }
    }
)

module.exports=mongoose.model("product",productModel)