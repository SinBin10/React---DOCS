import { useState } from "react";

const timer = ()=>{
    const [Count,setCount] = useState(0);
    function onclick(){
        setCount(Count+1);
    }
    return (
        <button onClick={onclick}>Click Me {Count}</button>
    )
};

export default timer;