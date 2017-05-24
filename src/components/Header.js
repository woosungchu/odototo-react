import React from 'react';
import PropTypes from 'prop-types';


class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
         time: this.now()
     };
  }

  now(){
    let currentdate = new Date();

    return currentdate.getDate() + "-"
            + (currentdate.getMonth()+1)  + "-"
            + currentdate.getFullYear()
  }

  render(){
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">{ this.props.title }</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span>{ this.state.time }</span></a></li>
            </ul>
          </div>
        </nav>
      );
  }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
