import axios from "axios";

 class Prefil{
    constructor(){
        console.log("preparing data to backend")
    }

    base_uri = "http://localhost:8060";    

     addDetails(name){
        console.log("add details")
        return axios.post(this.base_uri+'/save',name)  
    }
     

}
export default new Prefil