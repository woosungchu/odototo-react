import React from 'react';

const Blank = () => {
    return (
        <div>
        	<Converter/>
        	<Guide/>
        </div>
    );       
};
	
const Converter = () => (
    <div>
        <div id="blank-converter" className="row">
        <div className="col-sm-6">
          <div className="form-group">
              <textarea className="form-control editor" style={{resize:'none'}}
            	  placeholder="Message" ></textarea>
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

const Guide = () => (
	<div>
  	  <h4>blank.guide.howto</h4>
  	  <ol>
  	    <li>blank.guide.1</li>
  	    <li>blank.guide.2</li>
  	    <li>blank.guide.3</li>
  	  </ol>
  	</div>
)

export default Blank;
