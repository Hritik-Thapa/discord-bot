const mongoose=require('mongoose');

const urlSchema=mongoose.Schema({
    redirectUrl:{
        type:String,
        required:true
    }
})

const Url=mongoose.model('url',urlSchema);

module.exports=Url