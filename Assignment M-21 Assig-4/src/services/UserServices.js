import  UserModel from '../models/UserModel.js';
import { TokenEncode } from '../utilities/tokenUtility.js';



export const RegistrationServices= async (req, res)=>{

    try {
        await UserModel.create(req.body);
        return {status:"success", message:"User registration successful..!"}

    } catch (error) {
        return {status:"fail", message:"failed "}
    }
    

}

export const LoginServices= async (req, res)=>{

    try {
        let {NIDNumber, password}=req.body;
        let user=await UserModel.find(req.body);
       
        if(user.length==0){
            return {status:"fail", message:"User not registered"}
        }else{
            let token=TokenEncode(NIDNumber,password);
            if(token){
                return {status:"success", message:"User login successfully..!", "token":token}
            }else{
                return {status:"fail", message:"Something went wrong"}
            }    
        }        

    } catch (error) {
        return {status:"fail", message:error.toString()}
    }
    

}

export const ReadProfileServices= async (req, res)=>{

    try {
        let NIDNumber=req.headers.NIDNumber;
        let data= await UserModel.findOne({NIDNumber});
        return {status:"success", "data": data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}

export const ReadAllProfileServices= async (req, res)=>{

    try {
        let data= await UserModel.findOne({});
        return {status:"success", "data": data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}

export const UpdateProfileServices= async (req, res)=>{

    try {
        let NIDNumber=req.headers.NIDNumber;
        await UserModel.updateOne({NIDNumber}, req.body);
        let data= await UserModel.findOne({NIDNumber});
        return {status:"success", "data": data};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}

export const DeleteProfileServices= async (req, res)=>{

    try {
        let NIDNumber=req.headers.NIDNumber;
        let data= await UserModel.deleteOne({NIDNumber});
        return {status:"success", "message": "User deleted Successfully..!"};
        
    }catch (error) {
        return {status:"fail", message: error.toString()};
    }
    

}



