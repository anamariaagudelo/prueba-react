import React, { Component } from 'react';
import Header from '../../components/UI/Header/Header'
import RegisterCandidateForm from './RegisterCandidateForm';



class RegisterCandidate extends Component {
    state = {
        candidates: []
    }

    createCandidate = (NewCandidate) => {
        //console.log(candidate);
        const candidates = [...this.state.candidates,NewCandidate]; // Una copia del state actual y le paso el nuevo candidato
        console.log(candidates);

        this.setState({
            candidates
        });

    }

    render() {
        return (
            <div>
                <Header cookies={"Aun no hay candidatos registrados"} />
                <div>
                    <RegisterCandidateForm
                        createCandidate={this.createCandidate} />
                </div>
            </div>


        )
    }
}

export default RegisterCandidate;