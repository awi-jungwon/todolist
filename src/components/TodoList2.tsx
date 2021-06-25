import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

const style:React.CSSProperties = {
    backgroundColor: '#eee',
    padding: '12px 12px',
    textAlign: 'left',
    textTransform: 'capitalize',
    border: 'solid 1px #aaa',
    margin: 0
}

interface IProps {
    data: ITodoItem[];
    onListItemClick?: (id: number) => void;
    onItemDeleteClick?: (id: number) => void;
}

const TodoList2: React.FC<IProps> = (props) => {
    const [data, setData] = React.useState([]);

    const handleItemClick = (id: number) => {
        if(props.onListItemClick) props.onListItemClick(id);
    }
    const handleDeleteClick = (id: number) => {
        if(props.onItemDeleteClick) props.onItemDeleteClick(id);
    }
        return (
            <nav>
                <ul>
                    {props && props.data && props.data.map((item) => 
                    <>
                        <p key={`list-item-${item.id}`} style={style}>
                            <a style={{marginRight: '12px',cursor: 'pointer'}} onClick={() => handleItemClick(item.id)}>
                                {item.food}
                            </a>
                            <a title="remove this item." style={{float: 'right', cursor: 'pointer'}} onClick={() => handleDeleteClick(item.id)}>X</a>
                        </p>
                    </>)}
                </ul>
            </nav>
        );
    }

  export default TodoList2;