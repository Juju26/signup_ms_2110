import axios from 'axios'

class UserService {

    base_uri="http://localhost:8050";
    users_uri="http://localhost:8060";

    showUser(id) {
        return axios.get(this.base_uri+'/getcontent/'+id);
    }
    
    showAllUsers(){
        console.log("inside userservice");
        return axios.get(this.users_uri+'/getall/');
    }
}

export default new UserService