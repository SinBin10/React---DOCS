// import Yuta from "./components/Yuta";
// import fruits_list from "./components/fruits_list";
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

function events(){
  /*function onClick(){
    alert('You clicked me');
  }
  return (
    <button onClick={onClick}>Click me!</button>
  )*/
  return (
    <>
    <Timer/><br/>
    <Timer/>
    </>
  );
}



export default events;