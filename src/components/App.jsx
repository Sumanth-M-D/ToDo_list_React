import React, {useState} from "react";
import ToDoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(setItem, item) {
    setItems(prevItems => ([...prevItems, item]));
    setItem('');
  }

  function deleteItem(index) {
    console.log('delete');
    setItems(prevItems => prevItems.filter((item, i) => i!== index))
  }

  const listItems = items.map((item,i) => {
      return (<ToDoItem key={i} id = {i} item={item} onCheck={deleteItem}/>) //passing function in props
  });

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea 
        addItem ={addItem}
      />
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App;
