import React from 'react';

const Converter = ({source, text, converted,
                  onConvert, onCopy, onPrint, onCancel,
                  onTextareaChange, lenBytes}) => (
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
          <div id="blank-editor" className="editor"
            dangerouslySetInnerHTML={ {__html: text} }
            onClick={(e)=>{
              let target = e.target,
                  spaces = null;

              if(target.tagName === 'SPAN'){
                spaces = (new Array(lenBytes(target.outerText) + 1)).join('&nbsp;&nbsp;');
                target.outerHTML = '['+ spaces + ']';
              }
            }}
          >
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

Converter.lenBytes = (s,b,i,c) => {
  for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
  return b
}

Converter.defaultProps = {
    text: '',
    source: '',
    converted: false,
    onConvert: () => console.warn('onConvert not defined'),
    onCopy: () => console.warn('onCopy not defined'),
    onPrint: () => console.warn('onPrint not defined'),
    onCancel: () => console.warn('onCancel not defined'),
    onTextareaChange: () => console.warn('onTextareaChange not defined'),

    lenBytes: (s,b,i,c) => {for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);return b;}
};

export default Converter;
