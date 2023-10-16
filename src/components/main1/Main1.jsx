import React from 'react';
import classes from './Main1.module.css';

import Slider from './slider/Slider';

const Main1 = (props) => {
    return (
        <div id='main1' className={classes.main}>
            {props.children}
            <Slider />
        </div>
    );
};

export default Main1;
