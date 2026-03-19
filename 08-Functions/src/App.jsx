import React from 'react';


function shubh (){
  console.log("rammm");
}

  {/* <button onMouseMove={ shubh }> shubham </button> */}

function App(props) {
  
  
  return (
    <div>
      <div className='box' onMouseMove={shubh}>
        
      </div>
    </div>
  );
}

export default App;



