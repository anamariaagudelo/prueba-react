import React, { Component } from 'react';
import RegisterCandidateForm from './RegisterCandidateForm';
import CookiesCandidate from '../Cookies/Cookies';




class RegisterCandidate extends Component {
    state = {
        candidates: []
    }

    createCandidate = (NewCandidate) => {
        const candidates = [...this.state.candidates, NewCandidate]; // Una copia del state actual y le paso el nuevo candidato
        this.setState({
            candidates
        });
        CookiesCandidate.setCookie(NewCandidate);
   }

    render() {
        return (
            <div>
                <div>
                    <RegisterCandidateForm
                        createCandidate={this.createCandidate}/>
                </div>
            </div>


        )
    }
}

export default RegisterCandidate;