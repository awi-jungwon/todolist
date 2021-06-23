import React, { Component } from 'react';
import TestComponent from './shared/TestComponent';
class Control extends Component {
    
    handleCreateClick(mode) {
        this.props.onChangeMode(mode);
    }
    render() {
        const tesvariable = "test value";

        return (
            <ul>
                <li>
                    <a onClick={(e) => this.handleCreateClick('read')}>Read</a>
                    {/* <TestComponent displayName="Click me overwrite" /> */}
                </li>
                <li>
                    <a onClick={(e) => this.handleCreateClick('create')}>Create</a>
                </li>
                <li>
                    <a onClick={(e) => this.handleCreateClick('update')}>Update</a>
                </li>
                <li>
                    <input onClick={(e) => {
                        this.props.onChangeMode('delete');
                        alert('Did you eat it?');
                        console.log('deleted');
                        }} type="button" value="delete"/>
                </li>
            </ul>
        );
    }
  }

  export default Control;