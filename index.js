import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { Routers } from './router';

const App = () => {

    return (
        <Routers />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

