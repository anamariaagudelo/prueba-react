import React from 'react';

const ErrorComponent = (props)=> {
    return(
        <div>
            <div className="alert alert-danger text-center">{props.title}</div>
        </div>
    )
}

export default ErrorComponent;