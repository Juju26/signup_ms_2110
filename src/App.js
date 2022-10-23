import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Form } from './component/Form';
import {Form2} from './component/Form2';
import {Form3} from './component/Form3';
import {AllUser} from './component/AllUser'
import {User} from './component/User'
import './App.css';
import { Home } from './component/Home';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Form/>} />
          <Route path='/more' element={<Form2/>} />
          <Route path='/little_more' element={<Form3/>} />
          <Route path='/users' element={<AllUser/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/home' element={<Home/>}/>          
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
