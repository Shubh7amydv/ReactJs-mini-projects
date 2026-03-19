import { useState } from "react";

const App = () => {

  const [num, setNum] = useState({
    user: "Sarthak",
    age: 20
  });

  const btnClicked = () => {


    console.log(num);

    // copy the state object
    const newNum = { ...num };

    // update values
    newNum.user = "Aman";
    newNum.age = 25;

    // update state
    setNum(newNum);

    console.log(num);


       // Dont chnage the real object make a copy like above and change it //
    // console.log(num);
    // num.user="Aman";
    // num.age=20;
    // setNum(num);
    // console.log(num);
  };

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;