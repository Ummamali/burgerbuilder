import React from 'react';
import loader_gif from '../../assets/imgs/loaders/loader.gif'



const Loader = ({ width, height, classes, source }) => {
    return <img src={source} alt="Loading..." style={{ width, height }} className={classes}/>;
};

Loader.defaultProps = {
    width: "auto",
    height: "auto",
    source: loader_gif
};


export default Loader;