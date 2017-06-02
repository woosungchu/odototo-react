import React from 'react';
import { Header } from 'components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Blank, Word, NoMatch } from 'routes';
import style from 'styles/app.scss';

const App = () => {
    return (
        <Router>
            <div>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/blank" component={Blank}/>
                        <Route path="/word" component={Word}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
