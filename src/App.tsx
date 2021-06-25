import * as React from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import UpdateContent2 from "./components/UpdateContent2"
import CreateContent2 from "./components/CreateContent2"
import { ITodoItem } from './models/ITodoItem';

interface IProps {

}

interface IState {
  mode: 'list' | 'edit' | 'create' | 'delete';
  todoItems: ITodoItem[];
  currentId?: number;
}

const initState: IState = {
  mode: 'list',
  todoItems: [{id:1, food:'pancakes', desc:'especially with honey and some fresh fruit'},
  {id:2, food:'any sweet things', desc:'like sweet cakes maybe?'},
  {id:3, food:'hmmm', desc:'idk yet'}],
}

class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    
  }
  componentDidMount() {
    this.setState({...this.state, ...initState});
  }

  handleCreateClick = () => {
    this.setState({...this.state, mode: 'create', currentId: this.state.todoItems.length});
  }

    render () {
      return (
        <div className="App">
            <h1>What I want to eat</h1>
            <TodoList data={this.state && this.state.todoItems&& this.state.todoItems.sort((a,b) => a.id - b.id)} onListItemClick={(id: number) => {
              console.log(`you clicked id: ${id}`);
              this.setState({...this.state, mode: 'edit', currentId: id});
              
            }}
            onItemDeleteClick={(id: number) => {
              this.setState({...this.state, todoItems: this.state.todoItems.filter(x => x.id !== id)})
            }}
            ></TodoList>

            {this.state && this.state.mode == 'list' && <button onClick={this.handleCreateClick}>create new one</button>}

            {this.state && this.state.mode == 'create' && <CreateContent2 onSubmitClick={(newItem) => {
              const newTodoList: IState = {...this.state, mode: 'list', todoItems: [...this.state.todoItems, {
                id: this.state.todoItems.length,
                food: newItem.food,
                desc: newItem.desc
              }
            ]};
              this.setState(newTodoList);
              console.log(this.state.todoItems.length);
            }}></CreateContent2>}
            
            {/* 1. Component를 바로 받는 것이 아니고 {} */}
            {this.state && this.state.mode == 'edit' && this.state.currentId &&
            <UpdateContent2
              item={this.state.todoItems.filter(x => x.id === this.state.currentId)[0]} 
              onSubmitClick={(changedItem: ITodoItem) => {
                //console.log()
                this.setState({...this.state, mode: 'list', todoItems: [...this.state.todoItems.filter(x =>x.id !== changedItem.id), changedItem]});
              }}
              onDeleteClick={(deleteItem: number) => {
                this.setState({...this.state, todoItems: [...this.state.todoItems.filter(x => x.id !== deleteItem)]});
                console.log(this.state.todoItems);
              }}              
            />}
        </div>
    );
  }
}

export default App;

