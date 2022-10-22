import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../component/img/bg.svg'
import avatar from '../component/img/avatar.svg'
import wave from '../component/img/wave.png'
import './styles/Form.css'
import Prefil from '../component/service/Prefil.js'


export const Form =() =>{
	const navigate=useNavigate()
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')

    const handleSubmit= (e) =>{
        e.preventDefault();
        console.log("FirstName : "+firstName+" Lastname : "+lastName)
		const name={
			"firstName":firstName,
			"lastName": lastName
		}

			Prefil.addDetails(name).then(res=> {
				console.log("Name added");
				navigate("/more");
    });
	}




    return(
        <>      
		<title>Welcome page</title>
<div className="container">
    
<img src={wave} className="wave" alt="not found"></img>
		<div className="img">
			<img src={bg} alt="not found"></img>
		</div>
		<div className="login-content">
			<form>
				<img src={avatar} alt="not found"/>
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="text" 
                        value={firstName}  
                        className="input"  
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Firstname'/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5>Lastname</h5> */}
           		    	<input type="text" 
                        value={lastName} 
                        className="input"  
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Lastname'/>
            	   </div>
            	</div>
            	<input type="submit" onClick={(e) => handleSubmit(e)} className="btn" value="Continue" />
            </form>
        </div>
    </div>
        
        </>
    )
}