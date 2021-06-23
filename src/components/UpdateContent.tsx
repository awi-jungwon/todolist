import * as React from 'react';
import { ITodoItem } from '../models/ITodoItem';

interface initUpdateContentProps {
    item: ITodoItem;
    onSubmitClick?: (changedItem: ITodoItem) => void;
}

interface initUpdateContentState {
    currentItem: ITodoItem;
}
class UpdateContent extends React.Component<initUpdateContentProps, initUpdateContentState> {
    constructor(props:initUpdateContentProps) {
        super(props);
        
    }
    componentDidMount() {
        this.setState({...this.state, currentItem: {...this.props.item}});
    }

    componentWillReceiveProps(nextProps: initUpdateContentProps) {
        this.setState({...this.state, currentItem: {...nextProps.item}});
    }
    
    componentDidUpdate() {
        //console.log('re-rendered...' + this.props.item.id);
        //if(this.state) this.setState({...this.state, currentItem: {...this.props.item}});
    }
    handleInpuChange(name: string, value: string) {
        this.setState({...this.state, currentItem: {...this.state.currentItem, [name]: value}})
    }
    render() {
        //const {food, desc, id} = this.state && this.state.currentItem;
        return (
            <div>
                <h2>Updating it ;)</h2>
                <form action="/update_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <p>
                        <input type="text" 
                            name="food" 
                            placeholder="food" 
                            value={ this.state && this.state.currentItem.food} 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                this.handleInpuChange(e.currentTarget.name, e.currentTarget.value);
                            }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="tell me the detail" 
                        value={ this.state && this.state.currentItem.desc} 
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            this.handleInpuChange(e.currentTarget.name, e.currentTarget.value);
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

  export default UpdateContent;