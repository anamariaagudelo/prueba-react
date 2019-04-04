import React from 'react';


const Header = (props) => {
    return (
        <div className="containerJumbotron">
            <div className="jumbotron">
            <legend className="display-5">Git: {props.userGit}</legend>
                    <hr></hr>
                <div className="form-group row">
                <form  className="col-6">
                    <div className="form-group row">
                        <h2 className="col-6-sm-2 col-form-label">Nombre: </h2>
                        <div className="col-sm-10">
                        <label className="col-6-sm-2 col-form-label">{props.nombre}</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <h2 className="col-10-sm-2 col-form-label">Cédula: </h2>
                        <div className="col-sm-10">
                        <label className="col-2-sm-2 col-form-label">{props.id}</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <h2 className="col-10-sm-2 col-form-label">Email: </h2>
                        <div className="col-sm-10">
                        <label className="col-2-sm-2 col-form-label">{props.email}</label>
                        </div>
                    </div>
                </form>
                <form  className="col-6">
                <div className="form-group row">
                        <h2 className="col-6-sm-2 col-form-label">Apellido: </h2>
                        <div className="col-sm-10">
                        <label className="col-6-sm-2 col-form-label">{props.lastName}</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <h2 className="col-6-sm-2 col-form-label">Fecha: </h2>
                        <div className="col-sm-10">
                        <label className="col-6-sm-2 col-form-label">{props.date}</label>
                        </div>
                    </div>
                </form>
                </div>
                
            </div>
        </div>
    )
}

export default Header;