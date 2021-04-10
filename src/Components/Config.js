

// this file contains all the configurations

const paths = {
    origin: 'http://127.0.0.1:5000/', 
    prices: 'http://127.0.0.1:5000/prices',
    order: 'http://127.0.0.1:5000/order'
};


const meta = {
    userId: 15543,
    userName: 'Ummam Ali',
    deliverLocation: 'Islamabad'
};

const createPostInit = ( bodyObj ) => {
    return {
        method: 'POST',
        body: JSON.stringify(bodyObj),
        headers: {
            'Content-Type': 'application/json'
        }
    };
};
export { paths, meta, createPostInit };