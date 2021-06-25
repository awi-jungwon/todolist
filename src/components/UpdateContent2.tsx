import * as React from 'react';
import { setConstantValue } from 'typescript';
import { ITodoItem } from '../models/ITodoItem';

interface IUpdateContentProps {
    item: ITodoItem;
    onSubmitClick?: (changedItem: ITodoItem) => void;
    onDeleteClick?: (deleteItem: number) => void;
}

const UpdateContent2: React.FC<IUpdateContentProps> = (props) => {
    const [currentItem, setCurrentItem] = React.useState<ITodoItem>({food: "",id: 0,desc: ""});
    const [isOpen, setIsOpen] = React.useState<boolean>(true);
    React.useEffect(() => {
        
        return () => {

        }
    }, []);

    React.useEffect(() => {
        setCurrentItem({...props.item});
    }, [props.item])
    
    const handleInputChange = (name: string, value: string) => {
        setCurrentItem({...currentItem, [name]: value});
    }

    return (
            <div>
                <h2>Updating it with update component 2 ;)</h2>
                {<form action="/update_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <p>
                        <input type="text" 
                            name="food" 
                            placeholder="food" 
                            value={ currentItem.food} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                handleInputChange(e.currentTarget.name, e.currentTarget.value);
                            }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="tell me the detail" 
                        value={ currentItem.desc} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            handleInputChange(e.currentTarget.name, e.currentTarget.value);
                        }}></textarea>
                    </p>
                    <p>
                        <input type="submit" onClick={() => {
                            if(props.onSubmitClick) props.onSubmitClick(currentItem);
                        }} value="update"></input>

                        <input type="submit" onClick={() => {
                            if(props.onDeleteClick) props.onDeleteClick(currentItem.id);
                        }} value="delete"></input>

                    </p>
                </form> }
            </div>
        );
}

export default UpdateContent2
