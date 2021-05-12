import React, { useState } from "react";

function SubmitBtn(props){
  const [clicked, setClicked] = useState(false);

  return(
    <button 
        disabled={clicked} 
        disabled={props.disabled}
        onClick={() => setClicked(!clicked)} 
        className={clicked ? 'submit-button button-loading' : 'submit-button'}>
      {props.children}
    </button>
  )

}

export default SubmitBtn;