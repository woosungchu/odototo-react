import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header title={this.props.headerTitle}/>
                <Content/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Odototo'
};

export default App;
