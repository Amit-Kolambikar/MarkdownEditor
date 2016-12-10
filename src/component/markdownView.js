import React from 'react';
var marked = require('marked');
export default class markdownView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      markedBuild: ""
    }
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });
  }
  componentWillMount() {
    this.setState({
      markedBuild: marked(this.props.userInput)
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      markedBuild: marked(nextProps.userInput)
    });
  }
  render() {
    return (
      <div
           className="mdview"
           dangerouslySetInnerHTML={ { __html: this.state.markedBuild } } />
      );
  }
}
