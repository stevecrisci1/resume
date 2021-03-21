import React, { useState } from 'react'
import Hr from './hr.js'


export default function Window2() {


    const [todos, setTodos] = useState(
        [
            { text: "Update web site", completed: false },
            { text: "Grocery shopping", completed: false },
            { text: "Mow lawn", completed: true },
            { text: "Learn React JS", completed: true },
        ]
    )

    const [inputtext, setInputText] = useState(
        ""
    )

    function handleChange(e) {
        setInputText(e.target.value)
    }



    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
      };

    function addTodo(e) {
        if (! e.target.value)
            return
        const newValue = { completed: false, text: e.target.value }
        const newTodoList = [...todos, newValue]
        setTodos(newTodoList)
        setInputText("")
    }

    return (
        <div id="tasklist" name="tasklist" style={{ margin: "30px", border: "1px solid black" }}>
            <Hr />
            <h1>Task List using React Hooks</h1>
            <div className="inline">
                <div className="row">
                    <div className="col-md-4">
                        <div style={{height:"100px", overflowY:"auto", width:"300px",border:"1px solid black"}}>

                            {
                                todos.map((item, index) => (<div key={index}>
                                    <input type="checkbox"
                                        id="complete"
                                        name="complete"
                                        onChange={() => completeTodo(index)}
                                        checked={item.completed} />

                                    {item.text}

                                </div>))
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <input
                            placeholder="Add task..."
                            value={inputtext}
                            onChange={handleChange}
                            onBlur={addTodo} />
                        <button>Add</button>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        Tasks can be added and marked off when complete.
                        <br/>  
                        Note: items reset when loaded. Currently no method added to save data.
                    </div>
                </div>
            </div>
        </div>
    )
}