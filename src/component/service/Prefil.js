import axios from "axios";

 class Prefil{

    base_uri = "http://localhost:8060";    

     addDetails(name){
        console.log("add details")
        return axios.post(this.base_uri+'/save',name)  
    }
     

}
export default new Prefil