import React, { useState,useEffect} from 'react';
import axios  from 'axios';
import bg from '../component/img/bg.svg'
import avatar from '../component/img/avatar.svg'
import wave from '../component/img/wave.png'
import './styles/Form2.css'
import { useNavigate , useLocation } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Prefil from './service/Prefil';

export const Form3 =() =>{

    const navigate=useNavigate();
    const location=useLocation();

    const {userName}=location.state 
    const{userId}=location.state

    const [data, setData] = useState([]);
    const[country,setCountry]=useState([]);
    const[selectedCountry,setSelectedCountry]=useState('');
    const[states,setState]=useState([]);
    const[selectedState,setSelectedState]=useState('');
    const[city,setCity]=useState([]);
    const[selectedCity,setSelectedCity]=useState('');
    const handleSubmit= (e) =>{
        e.preventDefault();
        // console.log("Age "+age+" gender"+gender+" mobile "+mobile)
        console.log(selectedCountry+" "+selectedState+" "+selectedCity)

        const address={
            "city":selectedCity,
            "state":selectedState,
            "country":selectedCountry
        }
       Prefil.patchDetails(address)
        navigate('/home',{state:{id:userId}})
        
    }

    useEffect(() => {
        const response=axios
          .get(
            'https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json'
             )
          .then((res) => setData(res.data))
          .catch((err) => console.log("warnings"));
      }, []);

      const allCountries=[...new Set(data.map(it => it.country ))];
      allCountries.sort()

      const countryChange=(e) =>{
        setSelectedCountry(e.target.value)
        let allStates=data.filter(state => state.country===e.target.value);
        allStates=[...new Set(allStates.map(state=> state.subcountry))];
        allStates.sort()
        setState(allStates)
      }
    
      const stateChange=(e)=>{
        let allCities=data.filter(city => city.subcountry===e.target.value);
        allCities=[...new Set(allCities.map(cities => cities.name))]
        allCities.sort()
        setCity(allCities)
      }
      const checkCountry=()=>{
        // let c=checkDob();
        let flag=1;
        if (selectedCountry===""){
          document.getElementById("countryErr").innerHTML="Select Country first";
          flag=0;
        }
        return flag;
    }
    const checkState = () => {
      let c = checkCountry();
      let flag = 1;
      if (selectedState === '') {
        document.getElementById("stateErr").innerHTML = "Select State";
        flag = 0;
      }
      return flag;
    };
    
    const checkCity = () => {
      let c = checkState();
      let flag = 1;
      if (selectedCity=== '') {
        document.getElementById('cityErr').innerHTML = "Select City";
        flag = 0;
      }
      return flag;
    };



    return(
        <>     
        <title>One last step</title> 
        <div className="container">
    
        <img src={wave} className="wave" alt="not found"></img>
		<div className="img">
			<img src={bg} alt="not found"></img>
		</div>
		<div className="login-content">
			<form>
				<img src={avatar} alt="not found"/>
                <br/>
				 <h2 className="title">{userName}, Tell a little more😅</h2> 
           		
                   <label style={{"position":"relative","left":"-140px"}}><b>Country*</b></label>
       <Select
          labelId="demo-simple-select-label"
          size="small"
          id="demo-simple-select"
          label="Country"
          displayEmpty
          value={selectedCountry}
        //   onFocus={checkDob}
          onChange={(e) => {
            setCountry(e.target.value),
            document.getElementById("countryErr").innerHTML="",
            countryChange(e)
          }}
          fullWidth
        >
          <MenuItem  value="" disabled>Select Country</MenuItem>
          {allCountries.map( i => <MenuItem key={i} value={i}>{i}</MenuItem>)}
        </Select>

        <br/>
        <div id="countryErr" style={{"color":"red"}}></div><br/>
        
        <label style={{"position":"relative","left":"-140px"}}><b>State*</b></label>
        <Select
          labelId="demo-simple-select-label"
          size="small"
          id="demo-simple-select"
          label="state"
          value={selectedState}
          displayEmpty
          onFocus={checkCountry}
          onChange={(e) => {
            setSelectedState(e.target.value),      
            document.getElementById("stateErr").innerHTML="",
            stateChange(e)
            
          }}
          fullWidth
        >
          
          <MenuItem  value="" disabled>Select State</MenuItem>
          {states.map( i => <MenuItem key={i} value={i} >{i}</MenuItem>)}
        </Select>
          <br/>
          <div id="stateErr" style={{"color":"red"}}></div>
          <br/>

          <label style={{"position":"relative","left":"-140px"}}><b>City*</b></label>
        <Select
          labelId="demo-simple-select-label"
          size="small"
          id="demo-simple-select"
          label="city"
          displayEmpty
          value={selectedCity}
          onFocus={checkState}
          onChange={(e) => {
            setSelectedCity(e.target.value),
            document.getElementById("cityErr").innerHTML=""
            
          }}
          fullWidth
        >
          
          <MenuItem  value="" disabled>Select City</MenuItem>
          {city.map( i => <MenuItem key={i} value={i} >{i}</MenuItem>)}
        </Select>
        <br/>
        <div id="cityErr" style={{"color":"red"}}></div>
        <br/>
            	<input type="submit" onClick={(e) => handleSubmit(e)} className="btn" value="Finish" />
            </form>
        </div>
    </div>
        
        </>
    )
}