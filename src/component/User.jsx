import React from "react";
import { useState } from "react";
import UserService from "./service/UserService";

export const User=()=>{

    const [id,setId]=useState('')

    const[user,setUser]=useState([])

const handleSubmit=(e)=>{
    e.preventDefault()
    UserService.showUser(id).then(
        res=>{
            setUser(res.data)
            console.log(res.data)
        }
    ).catch("err")


}

    return(
        <>
        <div>
            <center>
            <form>
                <label>id</label>
                    <input  type='text' value={id} placeholder="Enter id" 
                    onChange={(e)=>setId(e.target.value)} />
                    <input type="submit" onClick={(e)=>handleSubmit(e)}/>
            </form>
            </center>
        </div>

        <table className="table table-striped table-border mt-5">
  <thead className="thead-dark">
    <tr>
      <th scope="col">id</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Mobile</th>
      <th scope="col">city</th>
      <th scope="col">state</th>
      <th scope="col">country</th>
      
    </tr>
  </thead>
  <tbody>
    {
                                              
                                                    <tr key={user.id}>
                                                        
                                                        <td>{user.id}</td>
                                                        <td>{user.firstName}</td>
                                                        <td>{user.lastName}</td>
                                                        <td>{user.age}</td>
                                                        
                                                        <td>{user.gender}</td>
                                                        <td>{user.mobile}</td>
                                                        <td>{user.city}</td>
                                                        <td>{user.state}</td>
                                                        <td>{user.country}</td>        
                                                    </tr>
                                                
                                            }
    
  </tbody>
</table>
        </>
    )
}