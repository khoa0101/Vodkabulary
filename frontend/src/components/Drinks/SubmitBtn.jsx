import React, { useState } from "react";

function SubmitBtn(props){
  const [clicked, setClicked] = useState(false);

  return(
    <button disabled={clicked} onClick={setClicked(!clicked)}>
      {this.props.children}
    </button>
  )

}

export default SubmitBtn;