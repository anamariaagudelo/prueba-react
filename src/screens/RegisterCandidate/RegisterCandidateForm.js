import React, { Component } from 'react';
import ErrorComponent  from '../../components/UI/Error/Error'
import uuid from 'uuid';




class RegisterCandidateForm extends Component {

    //refs
    nameRef = React.createRef();
    lastNameRef = React.createRef();
    idRef = React.createRef();
    birtDateRef = React.createRef();
    emailRef = React.createRef();
    userGitRef = React.createRef();

    state = {
        error: false
    }


    createCandidate = e => {
        e.preventDefault();
        console.log({e});
        
        const name = this.nameRef.current.value,
            lastName = this.lastNameRef.current.value,
            id = this.idRef.current.value,
            birtDate = this.birtDateRef.current.value,
            email = this.emailRef.current.value,
            userGit = this.userGitRef.current.value

        if (name === '' || lastName === '' || id === ''||birtDate==='' || email === '' || userGit === '') {
            this.setState({
                error: true
            })
        } else {
            const newCandidate = {
                ide: uuid(),
                name,
                lastName,
                id,
                birtDate,
                email,
                userGit
            }

            //Se envia el objeto hacia el padre para actualizar el state
            this.props.createCandidate(newCandidate);

            //Reiniciar el formulario
            e.currentTarget.reset();

            //Elimminar el Error
            this.setState({
                error:false
            })
        }
    }



    render() {
        const ErrorExist = this.state.error;
         return (
            <div className="card-mt-5">
                <h2 className="card-title text-center mb-5">REGISTRAR CANDIDATO</h2>
                <form onSubmit={this.createCandidate}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="name" name="name" ref={this.nameRef} type="text" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Last Name</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="Lastname" name="Lastname" ref={this.lastNameRef} type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Identification</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="id" name="id" ref={this.idRef} type="text" className="form-control" placeholder="Id" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Birt Date</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="date" name="date" ref={this.birtDateRef} type="date" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">Email</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="email" name="email" ref={this.emailRef} type="email" className="form-control" placeholder="email@example.com" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-lg-2 col-form-label">User Github</label>
                        <div className="col-sm-8 col-lg-10">
                            <input id="userGit" name="UserGit" ref={this.userGitRef} type="text" className="form-control" placeholder="UserGit" />
                        </div>
                    </div>

                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Register</button>
                        </div>
                    </div>
                </form>
                {ErrorExist ? <ErrorComponent title='All fields are required'/> : null}
            </div>

        )
    }
}



export default RegisterCandidateForm;

