import React from 'react';

export default class markdownView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.markedInput }
      </div>
      );
  }
}
