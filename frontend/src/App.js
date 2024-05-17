import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./User/register";
import Login from "./User/login";
import Profile from "./User/profile";
import {useDispatch, useSelector} from 'react-redux'
import { ProtectedRoute } from 'protected-route-react';
import { useEffect } from "react";
import toast from 'react-hot-toast'

function App() {
  window.addEventListener('contextmenu', e=>{
    e.preventDefault();
  });
  const {isAuthenticated , user, message, error, loading} = useSelector((state)=>state.user)

  const dispatch = useDispatch();
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'});
    }
    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'})
    }
  },[dispatch, error, message]);


  return(
    <Router>
      <Routes>
        <Route path="/" element={ <ProtectedRoute 
        isAuthenticated={!isAuthenticated} 
        redirect="/profile">
          <Register/>
        </ProtectedRoute> }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App;
