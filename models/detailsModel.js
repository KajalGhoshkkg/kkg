const mongoose = require("mongoose");
const validator = require("validator");

const detailsSchema = new mongoose.Schema({
    hospitalName:{
        type: String,
        required:true,
    },
    contact:{
        type:String,
        required:true,
    },
    location:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required:true,
    },
    typeOfTreatment:{
        type: String,
        required:true,
    },
    availableDoctors:{
        type: Array,
        required:true,
    },
    openCloseTime:{
        type: String,
        required:true,
    },
    facilities:{
        type: String,
        required:true,
    },
    latitude:{
        type: Number,
        required:true,
    },
    longitude:{
        type: Number,
        required:true,
    },
    about:{
        type:String,
        required:true
    },
    img:{
        type:String
    }
})

const detailsModel = mongoose.model("details_Table", detailsSchema);

module.exports = detailsModel;