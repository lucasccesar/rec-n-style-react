import React, { Fragment, useReducer } from 'react';

import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main1 from './components/main1/Main1'

const reducer = (state, action) => {
    switch (action.type) {
        case 'open':
            return { isSidebarOpen: true, sidebarMargin: '0vw', sidebarHalfDisplay: 'block' };
        case 'close':
            return { isSidebarOpen: false, sidebarMargin: '-40vw', sidebarHalfDisplay: 'none' };
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, {
        isSidebarOpen: false,
        sidebarMargin: '-40vw',
        sidebarHalfDisplay: 'none',
    });

	const {isSidebarOpen, sidebarMargin, sidebarHalfDisplay} = state

    function openSidebarHandler() {
        dispatch({ type: 'open' });
    }

    function closeSidebarHandler() {
        dispatch({ type: 'close' });
    }

    return (
        <Fragment>
            <Sidebar onCloseSidebar={closeSidebarHandler} sidebarMargin={sidebarMargin} sidebarHalfDisplay={sidebarHalfDisplay} />
            <Main1>
                <Header onOpenSidebar={openSidebarHandler} />
            </Main1>
        </Fragment>
    );
}

export default App;
