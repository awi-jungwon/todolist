import * as React from 'react';
import './App.css';
import TodoList from "./components/TodoList"
import Control from "./components/Control";
import ReadContent from "./components/ReadContent"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import { ITodoItem } from './models/ITodoItem';

interface IProps {

}
;
interface IState {
  mode: 'list' | 'edit' | 'create';
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
    render () {
      return (
        <div className="App">
            <h1>What I want to eat</h1>
            <TodoList data={this.state && this.state.todoItems&& this.state.todoItems.sort((a,b) => a.id - b.id)} onListItemClick={(id: number) => {
              console.log(`you clicked id: ${id}`);
              this.setState({...this.state, mode: 'edit', currentId: id});
            }}></TodoList>

            {this.state && this.state.mode == 'edit' && 
            <UpdateContent 
              item={this.state.todoItems.filter(x => x.id === this.state.currentId)[0]} 
              onSubmitClick={(changedItem: ITodoItem) => {
                //console.log()
                this.setState({...this.state, mode: 'list', todoItems: [...this.state.todoItems.filter(x =>x.id !== changedItem.id), changedItem]});
              }}/>}
        </div>
    );
  }
}

export default App;

