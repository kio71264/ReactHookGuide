//import R library and hook frm 'react' pck.this line enable to use feature JSX and hooks.
import React,{useEffect, useRef,useState} from 'react'

function UseRefHook() {
//*1. Accessing Dom elements*- this create mutable ref obj initialized to null & this used to store a reference of input elem.
const inputRef = useRef(null);

//current property -to accessthe underlying dom node
const focusInput = ()=>{
    inputRef.current.focus();
}

//*2.Storing Previous state*
const [count, setCount] = useState(0);

//used to store prev val of 'count' state variable
const PrevCountRef = useRef();

//Update the previous val after each render
/*We use the useEffect hook to update the prevCountRef after each render of the component.
Inside the effect, we update the value of prevCountRef.current to be equal to the current value of count.
 This ensures that prevCountRef.current always holds the previous value of count.
We specify [count] as the dependency array for the effect, 
indicating that the effect should run whenever the count state variable changes.
 */
useEffect(()=>{
    PrevCountRef.current = count
},[count])

/*We declare a variable prevCount and assign
 it the current value of prevCountRef.current. 
 This variable holds the previous value of the count state variable. */
const prevCount = PrevCountRef.current

//*3. Storing mutable values without causing re-renders
const intervalRef = useRef();

//this runs for every 2sec once this func clld
const startTimer = () =>{
    intervalRef.current = setInterval (()=>{
        console.log('Tick')
    },2000);
};

// this stop the timer func
const stopTimer = ()=>{
    clearInterval(intervalRef.current)
};

  return (
    <>
    <div>
        <input type='text'/>
        <input type='text' ref={inputRef}/>
        <button onClick={focusInput}>Focus Input</button>
    </div>

    <div>
        <p>current count : {count}</p>
        <p>Prev count : {prevCount}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>

    <div>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
    </div>
    </>
  )
}

export default UseRefHook //this enables programattic ctrl over DOM elem in R.compo