import React,{useContext} from 'react'
import { ThemeContext } from '../App';
import {UserContext} from '../App'

function UseContextHook() {
    // Theme context
    const theme = useContext(ThemeContext);
    //User context
    const user = useContext(UserContext)
  return (
    <>
    <div>The current theme is : {theme}</div>
    <div>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
    </div>
    </>
  )
}

export default UseContextHook