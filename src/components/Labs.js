import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from './About'
const Labs = () => {
    const navigate = useNavigate();

    function clickHandler(){
        //move to About page
        navigate('/about');
    }
  return (<div>
    <div>
        This is Labs page
    </div>
    <button onClick={clickHandler}> Move to About page </button>
  </div>
    
  )
}

export default Labs
