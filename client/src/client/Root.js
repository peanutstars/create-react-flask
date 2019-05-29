import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from 'components/Menu';
import App from 'shared/App';

const Root = () => (
    <BrowserRouter>
        <Menu/>
        <App/>
    </BrowserRouter>
);

const SubRoot = () => {
    return (<div>SubRoot Element</div>);
}

export {
    Root,
    SubRoot,
}
