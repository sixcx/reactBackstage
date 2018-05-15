//富文本框
import React from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

class RichText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    const box = document.getElementById('container');
    const toolbarOptions = [  
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons  
      ['blockquote', 'code-block'],  

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values  
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],  
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript  
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent  
      [{ 'direction': 'rtl' }],                         // text direction  

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],  

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme  
      [{ 'font': [] }],  
      [{ 'align': [] }],  
      ['link', 'image', 'video'],  
      ['clean']                                         // remove formatting button  
    ];  
    const options = {
      debug: 'warn',
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: '请输入文本...',
      readOnly: false,
      theme: 'snow'
    };
    const editor = this.editor = new Quill(box, options);
    editor.on('text-change', this.handleChange.bind(this));
  }

  handleChange () {
    let value = this.state.value;
    value = this.editor.root.innerHTML;
    this.setState({value});
  }

  render () {
    return (
      <div>
        <div id='container' style={{height: 300, background: '#fff'}}></div>
        <div style={{marginTop: 20}}>
          HTML代码：
          <div style={{background: '#fff', height: 100, width: '100%'}}>
            {this.state.value}
          </div>
        </div>
      </div>
    )
  }
}

export default RichText