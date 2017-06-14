import React from 'react';

const Converter = ({source, text, converted, onConvert, onCopy, onPrint, onCancel, onTextareaChange}) => (
    <div>
        <div id="blank-converter" className="row">
        <div className="col-sm-6">
          <div className="form-group">
              <textarea defaultValue={source}
                onChange={onTextareaChange}
                className="form-control editor"
                placeholder="Message"
                disabled={converted && 'disabled' }
                >
              </textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="blank-editor" className="editor" dangerouslySetInnerHTML={ {__html: text} }>
          </div>
        </div>
      </div>
      <div className="pull-right">
	      <span id="blank-msg" className="message" style={{display:'none'}}>copied</span>
	      <a href="#" className="btn btn-primary"
            onClick={onConvert} >
            convert
        </a>
	      <a href="#" className="btn btn-default" onClick={onCopy}>copy</a>
	      <a href="#" className="btn btn-default" onClick={onPrint}>print</a>
	      <a href="#" className="btn btn-default" onClick={onCancel}>cancel</a>
      </div>
    </div>
)

Converter.defaultProps = {
    text: '',
    source: '',
    converted: false,
    onConvert: () => console.warn('onConvert not defined'),
    onCopy: () => console.warn('onCopy not defined'),
    onPrint: () => console.warn('onPrint not defined'),
    onCancel: () => console.warn('onCancel not defined'),
    onTextareaChange: () => console.warn('onTextareaChange not defined')
};

export default Converter;
