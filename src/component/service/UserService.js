import axios from 'axios'

export const UserService =() =>{

    base_uri="http://localhost:8050"

    showUsers(id){
        return axios.get(base_uri+'getcontent/'+id)
    }
}