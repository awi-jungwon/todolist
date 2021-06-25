import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface ICreateContentProps {
    onSubmitClick?: (newItem: ITodoItem) => void;
}

const CreateContent2: React.FC<ICreateContentProps> = (props) => {

    const [currentItem, setCurrentItem] = React.useState<ITodoItem>({food: "",id: 0,desc: ""});
    React.useEffect(() => {
        return () => {

        }
    }, []);

    const handleInputChange = (name: string, value: string) => {
        setCurrentItem({...currentItem, [name]: value});
    }

    return (
        <div>
            <h2>Create what you want to eat it today.

            </h2>
                <form action="/create_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <p>
                        <input type="text" 
                            name="food" 
                            placeholder="food" 
                            value={  currentItem.food } 
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
                        }}></input>
                    </p>
                </form>
        </div>
    )
}

export default CreateContent2
