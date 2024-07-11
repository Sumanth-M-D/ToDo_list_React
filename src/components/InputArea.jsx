import React, {useState} from "react";


function InputArea(props) {
  const [item, setItem] = useState('');

  function handleChange(event) {
      const newItem = event.target.value;
      setItem(newItem);
  }

  return (
    <div className="form">
        <input type="text" value={item} onChange= {handleChange}/>
        <button onClick={() => props.addItem(setItem,item)}>
          <span>Add</span>
        </button>
      </div>
  );
}

export default InputArea;
