import React,{useState,useEffect, Component} from 'react';
import axios from 'axios';
// Axios is not an API itself but rather a popular JavaScript library used for 
// making HTTP requests from web browsers and Node.js. It simplifies the process of 
// sending asynchronous HTTP requests and handling responses.
// other ApI's : fetch ,request(superagent), ajax

function UseEffectHook2() {
    //Fetching Data from an API
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('https://api.example.com/data').then(res=>{
            setData(res.data)
        }).catch(err=>{
            console.log('Error fetching data:',err)
        })
    },[])

    //Subscribing to a websocket
    const [message, setMessage] = useState('');

    useEffect(()=>{
        const ws = new WebSocket('wss://websocket.example.com/');
        ws.onmessage =(event)=>{
            setMessage(event.data)
        };

        // cleanup func to clear and Component unmount
        return()=>{
            ws.close();
        };
    },[])

  return (
    <div>
        {/* API JSX */}
        <div>
            <h1>
                Data from axios :
            </h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
        {/* Websocket JSX */}
        <div>
            <h1>Websocket message:</h1>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default UseEffectHook2