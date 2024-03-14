
import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    profilePicture:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    },
    password:{
        type:String,
        required:true
    },
		isAdmin: {
		type: Boolean,
		default: false,
	},
},
{timestamps:true}
);

const User=mongoose.model('User',userSchema);

export default User;