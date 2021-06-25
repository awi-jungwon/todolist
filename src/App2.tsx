import * as React from 'react'
import './App.css';
import TodoList2 from "./components/TodoList2"
import UpdateContent2 from "./components/UpdateContent2"
import CreateContent2 from "./components/CreateContent2"
import { ITodoItem } from './models/ITodoItem';

interface IProps {

}

type Mode = 'list' | 'edit' | 'create' | 'delete';
const TodoItems: ITodoItem[] = [
  {id:1, food:'pancakes', desc:'especially with honey and some fresh fruit'},
  {id:2, food:'any sweet things', desc:'like sweet cakes maybe?'},
  {id:3, food:'hmmm', desc:'idk yet'}
]

const App2: React.FC<IProps> = () => {
  const [mode, setMode] = React.useState<Mode>('list');
  const [newTodo, setNewTodo] = React.useState({id:0, food:"", desc:""});
  const [todoItems, setTodoItems] = React.useState<ITodoItem[]>(TodoItems); /* initializing several objects in array */
  const [currentId, setCurrentId] = React.useState<number>(0);
  React.useEffect(()=>{
    return () => {

    }
  }, []);

  const handleCreateClick = () => {
    setMode('create');
    setCurrentId(0);
  }

  return (
    <div className="App">
      <h2>This page is from App2</h2>
      <h1>What I want to eat</h1>
            <TodoList2 data={todoItems&& todoItems.sort((a,b) => a.id - b.id)} onListItemClick={(id: number) => {
              console.log(`you clicked id: ${id}`);
              setMode('edit');
              setCurrentId(id);
              
            }}
            onItemDeleteClick={(id: number) => {
              setTodoItems(todoItems.filter(x => x.id !== id));
            }}
            ></TodoList2>

            {mode =='list' && <button onClick={handleCreateClick}>create new one</button>}

            {mode == 'create' && 
            <CreateContent2 onSubmitClick={(newItem) => {
              setMode('list');
              setTodoItems([...todoItems, {
                id: todoItems.length+1,
                food: newItem.food,
                desc: newItem.desc
              }]);
              console.log(JSON.stringify(todoItems));
            }}/>}
            
            {/* 1. Component를 바로 받는 것이 아니고 {} */}
            {mode == 'edit' && currentId &&
            <UpdateContent2
              item={todoItems.filter(x => x.id === currentId)[0]} 
              onSubmitClick={(changedItem: ITodoItem) => {
                setMode('list');
                setTodoItems([...todoItems.filter(x =>x.id !== changedItem.id), changedItem]);
              }}
              onDeleteClick={(deleteItem: number) => {
                setTodoItems(todoItems.filter(x => x.id !== deleteItem));
              }}              
            />}
    </div>
  )
}

export default App2