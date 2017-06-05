import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import { BlankApp } from '../reducers/blank';
import { Converter, Guide } from 'components/blank';

const store = createStore(BlankApp);

const BlankDOM = () => {
    return (
        <div>
        	<Converter/>
        	<Guide/>
        </div>
    );
};

const Blank = () => {
    return (
        <Provider store = {store}>
        	<BlankDOM/>
        </Provider>
    );
};

export default Blank;
