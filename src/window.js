import React, {useState} from 'react'


export default function Window(props){

    function handleChange(e){
        e.preventDefault();
        setinputText( e.target.value)
    }

    const [inputText, setinputText] = useState(
        ""
    );

    const[todos, setTodos] = useState(
        [{name:'fred'},{name:'tom'},{name:'steve'}]
    )

    

    const addToDo = function(e){
        alert("addtodo got:"+inputText)
        const newTodos = [...todos, {"name":inputText}]
        setTodos(newTodos)
        setinputText("")
        
    }

    return(<div>
        {todos.map((item)=><p>{item.name}</p>)}
        <input
            type="text"
            className="input"
            inputtext={inputText}
            onChange={e => handleChange(e)}
        />
        
        <button onClick={addToDo}>Add</button>
    </div>)

}