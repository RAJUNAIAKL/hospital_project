import { Navigate } from "react-router-dom";
import { getlocalstorageitem } from "./storage/local.storage";


export function Authroutes(props){

    //create a variable
    let uservalid = false;

    //check user
    uservalid = getlocalstorageitem('Doctor');

    if(uservalid){
        return props.children;
    }
    else{
        return <Navigate to="/admin/dashboard"></Navigate>
    }
}