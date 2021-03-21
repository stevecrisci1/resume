import React, {useState} from 'react'

export default function Window2(){


    const [todos, setTodos] = useState(
        [
            {text:"1", completed:false},
            {text:"2", completed:false},
            {text:"3", completed:false},
        ]
    )

    const[inputtext, setInputText] = useState(
        ""
    )
    
    function handleChange(e){
        setInputText(e.target.value)
    }

    function addTodo(e){
        const newValue = {completed:false,text:e.target.value}
        const newTodoList = [...todos, newValue]
        setTodos(newTodoList)
        setInputText("")
    }


    /*const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };
    */
    

    return(
        <div>
            {
                todos.map((item, index)=>(<div key={index}>
                    <p>{item.text}</p>
                </div>))
            }
            <input value={inputtext} onChange={handleChange} onBlur={addTodo}/>
            
        </div>
    )
}