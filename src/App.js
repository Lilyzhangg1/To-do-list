import React, { useState } from 'react';
import './index.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedText, setEditedText] = useState('');

  const addToDo = () => {
    if (newToDo.trim() !== '') {
      setToDos([...toDos, newToDo]);
      setNewToDo('');
    }
  };

  const deleteToDo = (index) => {
    setToDos(toDos.filter((_, i) => i !== index));
  };

  const editToDo = (index) => {
    setEditIndex(index);
    setEditedText(toDos[index]);
  };

  const saveEdit = (index) => {
    const updatedToDo = toDos.map((toDo, i) => (i === index ? editedText : toDo));
    setToDos(updatedToDo);
    setEditIndex(null);
    setEditedText('');
  };

  return (
    <div className="container">
      <div className="title">
        <h1>To-Do List</h1>
      </div>
      <div className="notepad">
        <div className="input-area">
          <input
            type="text"
            value={newToDo}
            onChange={(e) => setNewToDo(e.target.value)}
            placeholder="Add a new task"
          />
          <button onClick={addToDo}>Add</button>
        </div>
        <ul className="to-do-list">
          {toDos.map((toDo, index) => (
            <li key={index}>
              {editIndex === index ? (
                <div className="edit-area">
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                  />
                  <button onClick={() => saveEdit(index)}>Save</button>
                </div>
              ) : (
                <div className="to-do-item">
                  <span>{toDo}</span>
                  <button onClick={() => deleteToDo(index)}>Delete</button>
                  <button onClick={() => editToDo(index)}>Edit</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
