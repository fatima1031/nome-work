import {useState} from "react";


const App = () => {
    // let number = 0;
    const [number ,setNumber]= useState(0)

    function increment () {
        // number++;
        setNumber(number + 1);
        console.log(number);
    }

   ///////
    const minus = () => {
        if (number ===0) {
            return;
        }
        setNumber (number -1);
    }


    console.log('re-render')
////
    return (
        <div>
            <button onClick={minus}>-</button>
            <span> {number} </span>
            <button onClick={increment}>+</button>
        </div>
    )
}


export default App;