import React, { Fragment, useEffect, useReducer, useState } from 'react';

import './App.css';
import Header from './components/main1/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Main1 from './components/main1/Main1';
import Main2 from './components/main2/Main2';
import SaibaMais from './components/saibaMais/SaibaMais';
import limoeiroAntes from './assets/bridges/limoeiroAntes.png';
import limoeiroDepois from './assets/bridges/limoeiroDepois.png';

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

    const { isSidebarOpen, sidebarMargin, sidebarHalfDisplay } = state;

    function openSidebarHandler() {
        dispatch({ type: 'open' });
        document.querySelector('*').style.overflowY = 'hidden';
    }

    function closeSidebarHandler() {
        dispatch({ type: 'close' });
        document.querySelector('*').style.overflowY = 'scroll';
    }

    const [ponte, setPonte] = useState(null);
    const [ponteImgs, setPonteImgs] = useState({ antes: '', depois: '' });

    useEffect(() => {
        if (ponte == 'limoeiro') {
            setPonteImgs({ antes: limoeiroAntes, depois: limoeiroDepois });
        }
    }, [ponte]);

    return (
        <Fragment>
            <SaibaMais ponte={ponte} ponteImgs={ponteImgs} onSetPonte={setPonte}/>
            <Sidebar onCloseSidebar={closeSidebarHandler} sidebarMargin={sidebarMargin} sidebarHalfDisplay={sidebarHalfDisplay} />
            <Main1>
                <Header onOpenSidebar={openSidebarHandler} />
            </Main1>
            <Main2 onSetPonte={setPonte} />
        </Fragment>
    );
}

export default App;
