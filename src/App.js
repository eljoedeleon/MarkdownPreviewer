import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
import ControlLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

const marked = require('marked');
marked.setOptions({
  breaks: true,
});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
        
Heres some code, \`<div></div>\`, between 2 backticks.
      
\`\`\`
// this is multi-line code:
      
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
    }
  }
\`\`\`
        
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
      
There's also [links](https://www.freecodecamp.com), and
> Block Quotes!
      
And if you want to get really crazy, even tables:
      
Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
      
- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.
      
      
1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
      
![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png)
`
    }
  }

  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <FormGroup controlId="formControlIsTextArea">
                <ControlLabel className="label">Editor</ControlLabel>
                <FormControl as="textarea" id="editor" rows="10" value={this.state.markdown} onChange={this.handleChange.bind(this)}></FormControl>
              </FormGroup>
            </div>
            <div className="col-sm">
              <div className="label">Preview</div>
              <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
            </div>
          </div>
        </div>
        <footer>by{' '}
          <a href="https://github.com/eljoedeleon"
            target="_blank"
            rel="noopener noreferrer">eljoedeleon</a>
        </footer>
      </div>
    );
  }
}

export default App;
