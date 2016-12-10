import React from 'react';
import MarkdownView from '../component/markdownView'
var dummytext = require('../helpers/dummyMarkdownContent.md')
var marked = require('marked');
var Axios = require('axios');
export default class main extends React.Component {

  constructor(props) {
    super(props);

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
    Axios.get('http://heckyesmarkdown.com/go/dummytext.md')
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    const dummyMarkdownContent = dummytext;
    this.state = {
      markedInput: dummytext
    }
  // add dummy content first  or upload existing markdown file
  }
  initMarkedSettings() {
    document.getElementById('content').innerHTML = marked('# Marked in browser\n\nRendered by **marked**.');
  }
  componentWillMount() {
    this.initMarkedSettings();
  }
  render() {
    return (
      <div>
        <textarea
                  className="textarea-input"
                  onChange={ (event) => {
                               this.setState({
                                 markedInput: event.target.value
                               })
                             } }
                  value={ this.state.markedInput } />
        <MarkdownView/>
      </div>
      );
  }
}
