import React from 'react';
import MarkdownView from '../component/markdownView'
var dummytext = require('../helpers/dummyMarkdownContent.md')
var Axios = require('axios');
export default class main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      markedInput: ""
    }
  // add dummy content first  or upload existing markdown file
  }
  fetchDummyData() {
    Axios.get('https://raw.githubusercontent.com/Amit-Kolambikar/MarkdownEditor/master/src/helpers/dummyMarkdownContent.md')
      .then(function(response) {
        console.log(response);
        this.setState({
          markedInput: response.data
        });
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      });
  }
  componentWillMount() {
    this.fetchDummyData();
  }
  componentDidUpdate(prevProps, prevState) {
    var textFile = null,
      makeTextFile = function(text) {
        var data = new Blob([text], {
          type: 'text/markdown'
        });
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }
        textFile = window.URL.createObjectURL(data);
        // returns a URL you can use as a href
        return textFile;
      }.bind(this);
    let link = document.getElementById('main-button');
    link.addEventListener('click', function(e) {
      link.href = makeTextFile(this.state.markedInput)
    }.bind(this), false);

  }

  render() {
    return (
      <div className="parent">
        <textarea
                  className="textarea-input"
                  onChange={ (event) => {
                               this.setState({
                                 markedInput: event.target.value
                               })
                             } }
                  value={ this.state.markedInput } />
        <MarkdownView userInput={ this.state.markedInput } />
      </div>
      );
  }
}
