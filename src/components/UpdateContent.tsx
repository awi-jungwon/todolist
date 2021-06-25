import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface initUpdateContentProps {
    item: ITodoItem;
    onSubmitClick?: (changedItem: ITodoItem) => void;
    onDeleteClick?: (deleteItem: number) => void;
}

interface initUpdateContentState {
    currentItem: ITodoItem;
}
class UpdateContent extends React.Component<initUpdateContentProps, initUpdateContentState> {
    constructor(props:initUpdateContentProps) {
        super(props);
        
        this.state = {currentItem: {food: "",id: 0,desc: ""}};
    }
    componentDidMount() {
        console.log(`componentDidMount : ${JSON.stringify(this.props.item)}`)
        this.setState({...this.state, currentItem: {...this.props.item}});
        this.setState({...this.state, currentItem: {...this.props.item}});
        this.setState({...this.state, currentItem: {...this.props.item}});
        console.log(`current state : ${JSON.stringify(this.state)}`);
    }

    componentWillReceiveProps(nextProps: initUpdateContentProps) {
        console.log(`componentWillReceiveProps : ${JSON.stringify(this.props.item)}`)
        console.log(`componentWillReceiveProps : ${JSON.stringify(nextProps.item)}`)
        this.setState({...this.state, currentItem: {...nextProps.item}});
    }
    
    componentDidUpdate() {
        //console.log('re-rendered...' + this.props.item.id);
        //if(this.state) this.setState({...this.state, currentItem: {...this.props.item}});
    }
    handleInputChange(name: string, value: string) {
        this.setState({...this.state, currentItem: {...this.state.currentItem, [name]: value}})
    }
    render() {
        //const {food, desc, id} = this.state && this.state.currentItem;
        console.log(`rendering ui..`);
        console.log(`rendering state : ${JSON.stringify(this.state)}`);
        return (
            <div>
                <h2>Updating it ;)</h2>
                {<form action="/update_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <p>
                        <input type="text" 
                            name="food" 
                            placeholder="food" 
                            value={ this.state.currentItem.food} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                this.handleInputChange(e.currentTarget.name, e.currentTarget.value);
                            }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="tell me the detail" 
                        value={ this.state.currentItem.desc} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            this.handleInputChange(e.currentTarget.name, e.currentTarget.value);
                        }}></textarea>
                    </p>
                    <p>
                        <input type="submit" onClick={() => {
                            if(this.props.onSubmitClick) this.props.onSubmitClick(this.state.currentItem);
                        }} value="update"></input>

                        <input type="submit" onClick={() => {
                            if(this.props.onDeleteClick) this.props.onDeleteClick(this.state.currentItem.id);
                        }} value="delete"></input>

                    </p>
                </form> }
            </div>
        );
    }
  }

  export default UpdateContent;