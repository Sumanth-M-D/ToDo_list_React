import React, { useState } from 'react';

export default function ToDoItem(props) {

   // const [decoration, setDecoration] = useState('none');

   function handleClick() {
      // setDecoration(prevVal => (prevVal === 'none'? "line-through" : 'none'));
      props.onCheck(props.id);
   }

   return (
      <li  
         // style={{textDecoration:decoration }}
         onClick = {handleClick}
      >{props.item}</li>
   )
}

