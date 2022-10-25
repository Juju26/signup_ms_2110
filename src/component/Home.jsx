import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import UserService from './service/UserService'
import './styles/Home.css'

export const Home=()=>{

    const location=useLocation();
    const {id}=location.state
    console.log("home id: ",id);
    const [user,setUser]=useState('')
    
   useEffect(
      ()=>{
         UserService.showUser(id).then(
            res=>{
               setUser(res.data)
                  console.log(res.data)           
            }
         ).catch("user for id not found")
      },[id]
   )

    return(
        <>
        <div>
        <div className="container">
	
	<div className="table">
		<div className="table-header">
			<div className="header__item">Field</div>
			<div className="header__item">Values</div>
			
		</div>
		<div className="table-content">	
			<div className="table-row">		
				<div className="table-data">Id</div>
				<div className="table-data">{user.id}</div>
				
			</div>
			<div className="table-row">
				<div className="table-data">First Name</div>
                
        <div className="table-data">{user.firstName}</div>
				
			</div>
			<div className="table-row">
				<div className="table-data">Last Name</div>
				<div className="table-data">{user.lastName}</div>
				
			</div>
			<div className="table-row">
				<div className="table-data"> age</div>
				<div className="table-data">{user.age}</div>
				
			</div>

            <div className="table-row">
				<div className="table-data"> Gender</div>
				<div className="table-data">{user.gender}</div>
				
			</div>
			
            <div className="table-row">
				<div className="table-data"> Mobile</div>
				<div className="table-data">{user.mobile}</div>
				
			</div>
			
            <div className="table-row">
				<div className="table-data"> City</div>
				<div className="table-data">{user.city}</div>
				
			</div>
			
            <div className="table-row">
				<div className="table-data"> State </div>
				<div className="table-data">{user.state}</div>
				
			</div>
            <div className="table-row">
				<div className="table-data"> Country </div>
				<div className="table-data">{user.country}</div>
			</div>
			
			
		</div>	
	</div>
</div>
















            {/* <center>
        <table >
  <thead >
    <tr>
        
      <th><center>Fields</center></th>
      <th><center>Values</center></th>
    </tr>
  </thead>
  <tbody>                                      
                                              <tr >
                                                <td>FirstName</td>
                                                <td></td>
                                             </tr>

                                             <tr >
                                                <td>LastName</td>
                                                <td></td>
                                             </tr>

                                             <tr >
                                                <td>Age</td>
                                                <td></td>
                                             </tr>

                                             <tr >
                                                <td>Gender</td>
                                                <td></td>
                                             </tr>

                                             <tr >
                                                <td>Mobile</td>
                                                <td></td>
                                             </tr>

                                             <tr >
                                                <td>city</td>
                                                <td></td>
                                             </tr>
                                             <tr >
                                                <td>state</td>
                                                <td></td>
                                             </tr>
                                             <tr >
                                                <td>country</td>
                                                <td></td>
                                             </tr>




                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                              <tr scope="col"></tr>
                                     
    
  </tbody>
</table>
</center> */}
        </div>
        </>
    )
}