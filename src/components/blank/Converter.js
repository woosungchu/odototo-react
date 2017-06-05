import React from 'react';

const Converter = () => (
    <div>
        <div id="blank-converter" className="row">
        <div className="col-sm-6">
          <div className="form-group">
              <textarea className="form-control editor" placeholder="Message" ></textarea>
          </div>
        </div>
        <div className="col-sm-6">
          <div id="blank-editor" className="editor">
          </div>
        </div>
      </div>
      <div className="pull-right">
	      <span id="blank-msg" className="message" style={{display:'none'}}>copied</span>
	      <a className="btn btn-primary">convert</a>
	      <a className="btn btn-default">copy</a>
	      <a className="btn btn-default">print</a>
	      <a className="btn btn-default">cancel</a>
      </div>
    </div>
)

export default Converter;
