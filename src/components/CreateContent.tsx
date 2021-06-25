import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface initCreateContentProps {
    onSubmitClick?: (newItem: ITodoItem) => void; /* 버튼 클릭시 변경된 것을 받아서 보내는 것만. return은 필요없음? */
}

interface initCreateContentState {
    currentItem: ITodoItem;
}
class CreateContent extends React.Component<initCreateContentProps, initCreateContentState> {
    constructor(props:initCreateContentProps) {
        super(props);
        this.state = {currentItem: {food: "",id: 0,desc: ""}};
    }
    componentDidMount() {
    }

    componentWillReceiveProps(nextProps: initCreateContentProps) {
    }
    
    componentDidUpdate() {
    }

    handleInputChange(name: string, value: string) {
        this.setState({...this.state, currentItem: {...this.state.currentItem, [name]: value}})
    }
    render() {
        return (
            <div>
                <h2>Create what you want to eat it today.</h2>
                <form action="/create_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <p>
                        <input type="text" 
                            name="food" 
                            placeholder="food" 
                            value={  this.state.currentItem.food } 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                this.handleInputChange(e.currentTarget.name, e.currentTarget.value);
                            }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="tell me the detail" 
                        value={ this.state && this.state.currentItem.desc} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            this.handleInputChange(e.currentTarget.name, e.currentTarget.value);
                        }}></textarea>
                    </p>
                    <p>
                        <input type="submit" onClick={() => {
                            if(this.props.onSubmitClick) this.props.onSubmitClick(this.state.currentItem);
                        }}></input>
                    </p>
                </form>
            </div>
        );
    }
  }

  export default CreateContent;