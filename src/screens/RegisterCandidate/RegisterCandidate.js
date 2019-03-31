import React, { Component } from 'react';
import RegisterCandidateForm from './RegisterCandidateForm';
import PrintCandidate from './PrintCandidate'



class RegisterCandidate extends Component {
    state = {
        candidates: []
    }

    createCandidate = (NewCandidate) => {
        //console.log(candidate);
        const candidates = [...this.state.candidates, NewCandidate]; // Una copia del state actual y le paso el nuevo candidato
        console.log(candidates);

        this.setState({
            candidates
        });

    }

    render() {
        return (
            <div>
                <div>
                    <PrintCandidate
                        candidates={this.state.candidates} />
                </div>

                <div>
                    <RegisterCandidateForm
                        createCandidate={this.createCandidate} />
                </div>
            </div>


        )
    }
}

export default RegisterCandidate;