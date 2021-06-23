import React, { Component } from 'react';

class ReadContent extends Component {
    render() {
        var title = this.props.title;
        var desc = this.props.desc;
        return (
            <div>
                <h2>{title}<span> :)</span></h2>
                <p>{desc}</p>
            </div>
        );
    }
  }

  export default ReadContent;