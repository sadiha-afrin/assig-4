import {RegistrationServices, LoginServices, ReadProfileServices,ReadAllProfileServices, UpdateProfileServices, DeleteProfileServices} from '../services/UserServices.js';




export const Registration= async (req, res)=>{
    let result= await RegistrationServices(req);
    res.status(200).json(result);
}


export const Login= async (req, res)=>{
    let result= await LoginServices(req);
    if(result.status=='success'){
        let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}
        res.cookie('token',result['token'],cookieOption);
        res.status(200).json(result);  
   }else{
        res.status(400).json({"message":result['message']});
   }
 
}

export const ReadProfile= async (req, res)=>{
    
    let result= await ReadProfileServices(req);
    res.status(200).json(result);


}
export const ReadAllProfile= async (req, res)=>{
    
    let result= await ReadAllProfileServices(req);
    res.status(200).json(result);


}



export const UpdateProfile= async (req, res)=>{
    
    let result= await UpdateProfileServices(req);
    res.status(200).json(result);


}


export const DeleteProfile= async (req, res)=>{
    
    let result= await DeleteProfileServices(req);
    res.status(200).json(result);


}



