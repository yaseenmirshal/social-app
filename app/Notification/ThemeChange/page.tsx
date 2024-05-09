import React from 'react'
import { useState } from 'react';
import '/common.css'

function page() {
    const [isWhite, setIsWhite] = useState(true);

  const toggleColor = () => {
    setIsWhite(!isWhite);
    // setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };
  return (
  <>

<button className='float-left '  style={{marginLeft:'50px',marginTop:'25px',marginRight:'15px',cursor:'default'}}>Switch Theme</button>
<label onChange={toggleColor} className="mt-5 switch">
    <input type="checkbox"/>
    <span className="slider"></span>
</label>



    </>
  )
}

export default page