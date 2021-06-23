import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface IProps {
    data: ITodoItem[];
    onListItemClick?: (id: number) => void;
}

interface IState {
    
}

class TodoList extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    }
    componentDidMount() {

    }
    handleItemClick(id: number) {
        if(this.props.onListItemClick) this.props.onListItemClick(id);
    }
    render() {
                
        return (
            <nav>
                <ul>
                    {this.props && this.props.data && this.props.data.map((item) => 
                    <>
                        <li key={`list-item-${item.id}`}>
                            <a onClick={() => this.handleItemClick(item.id)}>
                                {item.food}
                            </a>
                        </li>
                    </>)}
                </ul>
            </nav>
        );
    }
  }

  export default TodoList;