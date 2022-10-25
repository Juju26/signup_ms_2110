import React, { useEffect, useState } from 'react'
import bg from '../component/img/bg.svg'
import avatar from '../component/img/avatar.svg'
import wave from '../component/img/wave.png'
import './styles/Form2.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Prefil from './service/Prefil'
import UserService from './service/UserService'

export const Form2 =() =>{
  

    
    const [name,setName]=useState('')
    const [id,setId] =useState('')

    useEffect(()=>{
        const userId=localStorage.getItem("id")
        UserService.showUser(userId).then(res=>{
            setId(res.data.id)
            setName(res.data.firstName)
        }
    );
    },[])
    
    const navigate=useNavigate()

    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [mobile,setMobile]=useState('')
    
    const handleSubmit= (e) =>{
        e.preventDefault();      
        const body={
            "age": Number(age),
            "gender":gender,
            "mobile":mobile
        } 
        console.log("Age "+age+" gender"+gender+" mobile "+mobile)
        Prefil.patchDetails(body);

        navigate("/little_more",{state:{userName:name,userId:id}})
    }
    return(
        <>     
        <title>Let's get started</title> 
<div className="container">
    
<img src={wave} className="wave" alt="not found"></img>
		<div className="img">
			<img src={bg} alt="not found"></img>
		</div>
		<div className="login-content">
			<form>
				<img src={avatar} alt="not found"/>
                <br/>
				 <h2 className="title">Welcome {name} Tell us more😁</h2> 
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<input type="number" 
                        value={age}  
                        className="input"  
                        onChange={(e) => setAge(e.target.value)}
                        min={3}
                        max={150}
                        placeholder='Age'/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
                     <select
                     value={gender}
                     name="Gender"
                     onChange={(e) => setGender(e.target.value)}
                  className='input-menu'
                  placeholder='Select gender'>
                       <option  hidden defaultValue > Select gender</option>
                        <option value='Male'> Male</option>
                        <option value='Female'>Female</option>
                        <option value='other'>Other</option>
                     </select>


                      {/* <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                    fullWidth
                    value={gender}
                     label="Gender"
                     onChange={(e) => setGender(e.target.value)}
                    //  className='input'

                    sx={{boxShadow:'none' , '.MuiOutlinedInput-notchedOutline':{border:0}} }
                     >
    <MenuItem value={"male"}>Male</MenuItem>
    <MenuItem value={"female"}>Female</MenuItem>
    <MenuItem value={"other"}>Other</MenuItem>
  </Select> */}
            	</div>

                <div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	{/* <h5>Lastname</h5> */}
           		    	<input type="number" 
                        value={mobile} 
                        className="input"  
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder='Phone'
                        maxLength={10}
                        minLength={10}/>
            	   </div>
            	</div>
            	<input type="submit" onClick={(e) => handleSubmit(e)} className="btn" value="Continue" />
            </form>
        </div>
    </div>
        
        </>
    )
}