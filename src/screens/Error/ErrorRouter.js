import React, { Component } from 'react';
import ErrorComponent from '../../components/UI/Error/Error'

class Error extends Component {
    render() {
        return (
            <div >
                <ErrorComponent
                title='Opsssss Pagina no encontrada'
                />
            </div>
        )
    }
}

export default Error ;