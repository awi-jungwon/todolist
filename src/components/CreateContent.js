import React, { Component } from 'react';


const initCreateContentState = {
    food: "",
    description: "",
}
class CreateContent extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        this.setState({...this.state, ...initCreateContentState});
    }
    render() {
        return (
            <div>
                <h2>Adding a new one ;)</h2>
                <form action="/create_process" method="post"
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.props.onSubmit({...this.state});
                    }}
                >
                    <p>
                        <input type="text" name="food" placeholder="food" value={this.state?.food} 
                        onChange={(e) => { 
                            const inputValue = e.currentTarget.value;
                            console.log(inputValue);
                            this.setState({...this.state, food: inputValue});
                        }}></input>
                    </p>
                    <p>
                        <textarea name="desc" placeholder="tell me the detail" onChange={(e) => { 
                            const inputValue = e.currentTarget.value;
                            console.log(inputValue);
                            this.setState({...this.state, description: inputValue});
                        }}>{this.state?.description}</textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </div>
        );
    }
  }

  export default CreateContent;