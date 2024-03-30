import React, {useState} from 'react';

function UseStateHook () {
  //Counter exmp
  const [count, setCount] = useState (0);

  //Input Field
  const [text, setText] = useState ('');

  //Toggle
  const [isOn, setIsOn] = useState (false);

  return (
    <div>
      {/* counter jsx */}
      <div>
        <p>Count Value : {count}</p>
        <button onClick={() => setCount (count + 1)}>Increment</button>
        <button onClick={() => setCount (count - 1)}>Decrement</button>
      </div>

      {/* Input Field jsx */}
    <div>
        <input type='text' value={text} onChange={(e)=> setText(e.target.value)} />
        <p>Your Live typing text : {text}</p>
    </div>

      {/* Toggle jsx */}
      <div>
        <button onClick={()=> setIsOn(!isOn)}>
            {isOn?'Turn Off':'Trun On'}
        </button>
        {/* to add the p tag text only on isOn true i.e light is on else it won't visible*/}
        {isOn && <p>The Light is on!</p>}
      </div>
    </div>
  );
}

export default UseStateHook;
