import React, { useState, Fragment, useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import Sidebar from './sidebar/Sidebar';

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarMargin, setSidebarMargin] = useState('-40vw');
    const [sidebarHalfDisplay, setSidebarHalfDisplay] = useState('none');
    console.log('state')

    function openSidebarHandler() {
        setIsSidebarOpen(true);
        setSidebarMargin('0vw');
        setSidebarHalfDisplay('block');
    }

    function closeSidebarHandler() {
        setIsSidebarOpen(false);
        setSidebarMargin('-40vw');
        setSidebarHalfDisplay('none');
    }

    return (
        <Fragment>
            <Sidebar onCloseSidebar={closeSidebarHandler} sidebarMargin={sidebarMargin} sidebarHalfDisplay={sidebarHalfDisplay}/>
            <Header onOpenSidebar={openSidebarHandler} />
        </Fragment>
    );
}

export default App;
