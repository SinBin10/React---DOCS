// import Yuta from "./components/Yuta";
// import fruits_list from "./components/fruits_list";
import { useState } from "react";
import Timer from "./components/Counter";
// import './components/Counter';
/*function MyButton(){
  return (
    <button>Hello</button>
  );
}

function MyApp(){
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  );
}*/



function Events() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Timer count={count} onClick={handleClick} /><br />
      <Timer count={count} onClick={handleClick} />
    </>
  );
}

export default Events;