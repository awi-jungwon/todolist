import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface IProps {
    data: ITodoItem[];
    onListItemClick?: (id: number) => void;
    onItemDeleteClick?: (id: number) => void;
}
const style:React.CSSProperties = {
    backgroundColor: '#eee',
    padding: '12px 12px',
    textAlign: 'left',
    textTransform: 'capitalize',
    border: 'solid 1px #aaa',
    margin: 0

}
interface IState {
    
}

class TodoList extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);
    }
    componentDidMount() {

    }
    handleItemClick = (id: number) => {
        if(this.props.onListItemClick) this.props.onListItemClick(id);
    }
    handleDeleteClick = (id: number) => {
        if(this.props.onItemDeleteClick) this.props.onItemDeleteClick(id);
    }
    render() {
        return (
            <nav>
                <ul>
                    {this.props && this.props.data && this.props.data.map((item) => 
                    <>
                        <p key={`list-item-${item.id}`} style={style}>
                            <a style={{marginRight: '12px',cursor: 'pointer'}} onClick={() => this.handleItemClick(item.id)}>
                                {item.food}
                            </a>
                            <a title="remove this item." style={{float: 'right', cursor: 'pointer'}} onClick={() => this.handleDeleteClick(item.id)}>X</a>
                        </p>
                    </>)}
                </ul>
            </nav>
        );
    }
  }

  export default TodoList;