// set function
export function setlocalstorageitem(key,value){
    localStorage.setItem(key,value);
}

//get function
export function getlocalstorageitem(key){
    return localStorage.getItem(key);
}

//remove function
export function removelocalstorageitem(key){
    localStorage.removeItem(key);
}