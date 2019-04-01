import React, { Component } from 'react';

class SearchUserGithub extends Component {

    // refs 
    userRef = React.createRef();

    searchUser = (e) => {
        e.preventDefault();

        //leer los refs y crear el objeto
        const search = {
            user: this.userRef.current.value
        }
        // enviar por props 
        this.props.consultUser(search)
        
        // resetear formulario
        e.currentTarget.reset();
    }

    render() {
        return (
            <div className="car-mt-5">
                <form onSubmit={this.searchUser}>
                    <div className="form-group row">
                        <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                            <input ref={this.userRef} type="text" className="form-control" placeholder="User Github" />
                        </div>
                        <div className="col-sm-8 col-lg-4">
                            <button type="submit" className="btn btn-success w-100">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}


export default SearchUserGithub;