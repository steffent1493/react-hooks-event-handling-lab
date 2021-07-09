import React from 'react';

function Keypad(){
   console.log('Entering password...')
    return (
    <input type="password" onChange={Keypad}/>
   
)}

export default Keypad;