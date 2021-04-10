import React from 'react';

// the loader gif
import loader_gif from '../../assets/imgs/loaders/begin_loader.gif';

// components
import Loader from '../Utils/loader';

const Notification = ({ orderPlaced, errorraised, loading }) => {
    if (orderPlaced){
        return (
            <div className='bg-green-400 bg-opacity-60 py-2 px-4 rounded mb-4'>
                <h2 className='text-green-700 text-lg font-medium'>Success</h2>
                <p className='text-sm text-green-700 -mt-1 text-opacity-80'>Your order has been placed</p>
            </div>
        )
    }else if (errorraised){
        return (
            <div className='bg-red-400 bg-opacity-60 py-2 px-4 rounded mb-4'>
                <h2 className='text-red-700 text-lg font-medium'>Failed</h2>
                <p className='text-sm text-red-700 -mt-1 text-opacity-80'>Your order has not been placed</p>
            </div>
        )
    }else if (loading){
        return (
            <Loader width='50px' source={loader_gif} classes='block mx-auto'/>
        );
    }
    else{
        return null;
    }
};


export default Notification;