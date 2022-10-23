import React, { useEffect } from 'react'
import UserService from './service/UserService'
import './styles/User.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export const AllUser =()=>{

    const [alluser,setAllUser]=useState([])
    useEffect(()=>{
        UserService.showAllUsers().then(res=>{
            setAllUser(res.data)
            console.log(alluser)
         })
    }
    );
    
    

    return(
        <>
        <div >
        <table class="table table-striped table-border mt-5">
  <thead class="thead-dark">
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
                                                alluser.map((user) => (
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
                                                  
                                                ))
                                            }
    
  </tbody>
</table>

        </div>
        </>
    )
}