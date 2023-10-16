/* import AppContext from './appContext';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';

const AppProvider = (props) => {
    const saibaMais = (ponte) =>{
        return (
            <Fragment>
                {ReactDOM.createPortal(
                    <div className={classes.wrapper}>
                        <div className={classes.images}>
                            <div className={classes['img-1']} style={{backgroundImage: `url(../assets/bridges/${ponte}Depois.png)`}}></div>
                            <div className={classes['img-2']} style={{backgroundImage: `url(../assets/bridges/${ponte}Antes.png)`}}></div>
                        </div>
                        <div className={classes.slider}>
                            <div className={classes.drag}>
                                <div className={classes.dragLineUpper}></div>
                                <div className={classes.dragBall}>
                                    <span style={{borderLeftColor: '#fff'}}></span>
                                    <span style={{borderTopColor: '#fff'}}></span>
                                </div>
                                <div className={classes.dragLineLower}></div>
                            </div>
                            <input type="range" min="0" max="100" value="50" />
                        </div>
                    </div>, 
                    document.getElementById('wrapperBg')
                )}
            </Fragment>
        );
    }

    const ctx = {
        saibaMais: saibaMais
    }

    return <AppContext.Provider value={ctx}>
        {props.children}
    </AppContext.Provider>
};

export default AppProvider */