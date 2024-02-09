const mongoose = require('mongoose');

const houseSchema = new mongoose.Schema(
    {   
        "_id" : {
            type: String,
            required: true,
        },
        "address" : {
            type: String,
            required: true,
        },
        "county" : {
            type: String,
            required: true,
        },
        "description" : {
            type: String,
            required: true,
        },
        "price" : {
            type: Number,
            required: true,
        },
        "photo" : {
            type: String,
            required: true,
        },
    }
)

// user schema

let userSchema = new mongoose.Schema(
    {
        "name" : {
            type: String,
            required: true,
            index : {
                unique : true
            }
        },
        "email" : {
            type: String,
            required: true,
        },
        "password" : {
            type: String,
            required: true,
        },
        "phone" : {
            type: String,
            required: true,
        },
        "role": {
            type: String,
            default: "customer"
        }
    }
)

// enquiry schema 

let enquirySchema = new mongoose.Schema(
    {
        "name" : {
            type: String,
            required: true,
        },
        "address" : {
            type: String,
            required: true,
        },
        "email" : {
            type: String,
            required: true,
        },
        "mobilenum" : {
            type: String,
            required: true,
        },
        "remarks" : {
            type: String,
            required: true,
        },
        
        "submittedData": {
            type: Date,
            default: new Date()
        }
     
    }
)



let houseModel = mongoose.model('House',houseSchema);

let userModel = mongoose.model('User',userSchema);

let enquiryModel = mongoose.model('Enquiry',enquirySchema);

module.exports = {houseModel, userModel, enquiryModel};