import React, { useState } from 'react';

function App(props) {


  const[title,setTitle]=useState("");

  function submitHandler(elem){
    elem.preventDefault();
    console.log("FORM SUBMITTED SUCCESFULLY ")
    // setTitle("")
  }

  return (
    <main>
      <div>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>
           <input 
             value={title}
             type="text" 
             placeholder='Enter your name '
             onChange={(e)=>{
              setTitle(e.target.value);
             }}
             />

          <button >Submit </button>
        </form>
    </div>
    </main>
  );
}

export default App;