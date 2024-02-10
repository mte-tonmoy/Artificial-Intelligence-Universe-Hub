import React from 'react';

const SingleData = (props) => {
    console.log(props.SingleData);
    const {image, features, published_in, name
    } = props.SingleData;
    return (
        <div>
           <h1>Hello World</h1> 
        </div>
    );
};

export default SingleData;