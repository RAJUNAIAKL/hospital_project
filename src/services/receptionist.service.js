import { Update, deleteitem, get, save } from "./context.service";




//create a url for receptionist
const  receptionisturl="http://localhost:4000/receptionform";

const receptiondeleteurl ="http://localhost:4000/deletereception/";

//create a function for get data of receptionist
export function getreceptionist(){
    return get( receptionisturl);
}

//create a function for save data of receptionist

export function savereceptionist(data){
    return save(receptionisturl,data);
}

//create a function for update of receptionist

export function updatereceptionist(data){
    return Update(receptionisturl,data);
}

 //create a function for delete of propertytype
export function deletereceptdata(id){
    return deleteitem(receptiondeleteurl+id);
}