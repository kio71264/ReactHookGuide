import React,{useState, useEffect} from 'react'

function UseEffectHook1() {
    // Document title update
    useEffect(()=>{
        document.title = 'kiruba';
    },[])//empty arr means this effc runs only once on component mount

    //Mouse event listener
    useEffect(()=>{
      const logMousePosition = (e)=>{
        console.log('Current Mouse-Position:',{x:e.clientX, y:e.clientY})
      };
      window.addEventListener('mousemove', logMousePosition)
    },[]) //runs only once on comp mount

    //Window resize event listener
      const [windowSize, setWindowSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight,
      })

      useEffect(()=>{
        const handleResize = ()=>{
          setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight,
          });
        }

        window.addEventListener('resize', handleResize);

        return()=>{
          window.removeEventListener('resize',handleResize);
        };

      },[])

  return (
    <>
    <div>
        <h1>Hello User!</h1>
        <p>The document title has updated</p>
    </div>
    <div>
        <h2>See console to observe mouse Move log</h2>
    </div>
    <div>
      Window size :
      <p>Width = {windowSize.width}px</p>
      <p>Height = {windowSize.height}px</p>
    </div>

    </>
  )
}

export default UseEffectHook1