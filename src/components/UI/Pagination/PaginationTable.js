import React from 'react';

const Pagination = () =>{
    return(
        <div className="row py-5 justify-content-end">
        <button typr="button" className="btn btn-info mr-1">Anterior &larr;
        </button>
        <button typr="button" className="btn btn-info ">Siguiente &rarr;
        </button>

        </div>
    )
}

export default Pagination;