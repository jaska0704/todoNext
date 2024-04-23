import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todo-reduser/todoReduser';
import { RootState } from '../redux/store';


export const TodoList = () => {
    const [add, setAdd] = React.useState('');
    const dispatch = useDispatch();


  return (
    <div>
        <input onChange={(e)=> setAdd(e.target.value)} type="text" />
        <button onClick={()=> dispatch(addTodo<RootState>())}>Add</button>
    </div>
  )
}
