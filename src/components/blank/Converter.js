import React from 'react';

const Converter = ({source, text, onConvert, onCopy, onPrint, onCancel}) => (
    <div>
        <div id="blank-converter" className="row">
        <div className="col-sm-6">
          <div className="form-group">
              <textarea value={source} className="form-control editor" placeholder="Message" ></textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="blank-editor" className="editor">
          {text}
          </div>
        </div>
      </div>
      <div className="pull-right">
	      <span id="blank-msg" className="message" style={{display:'none'}}>copied</span>
	      <a href="#" className="btn btn-primary" onClick={onConvert} >convert</a>
	      <a href="#" className="btn btn-default" onClick={onCopy}>copy</a>
	      <a href="#" className="btn btn-default" onClick={onPrint}>print</a>
	      <a href="#" className="btn btn-default" onClick={onCancel}>cancel</a>
      </div>
    </div>
)

Converter.defaultProps = {
    text: 0,
    word: 'black',
    onConvert: () => console.warn('onConvert not defined'),
    onCopy: () => console.warn('onCopy not defined'),
    onPrint: () => console.warn('onPrint not defined'),
    onCancel: () => console.warn('onCancel not defined')
};

export default Converter;
