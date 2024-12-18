import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    firstName:{type:String,required:true,trim:true},
    lastName:{type:String,required:true,trim:true},
    NIDNumber:{type:String,required:true,trim:true, unique: true},
    phoneNumber:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    bloodGroup:{type:String,required:true,trim:true},

}, {timestamps: true, versionKey: false});

const UserModel=mongoose.model('users', DataSchema);

export default UserModel;

