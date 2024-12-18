import {TokenDecode} from "../utilities/tokenUtility.js";

export default (req, res, next) => {

    let token=req.headers['token']
    let decoded=TokenDecode(token)
  
    if (decoded===null){
        res.status(401).send({status:"fail",message:"Unauthorized"})
    }

    else {
        
        let NIDNumber=decoded.NIDNumber;
        let password=decoded.password;

        
        req.headers.NIDNumber=NIDNumber;
        req.headers.password=password;
        
        next()
    }
}