import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


class Add_editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
    <Editor
        localization={{ locale: 'zh' }}
        wrapperClassName="wysiwyg-wrapper"
    />
    )
  }
}

export default Add_editor;