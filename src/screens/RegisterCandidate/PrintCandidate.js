import React, { Component } from 'react';
import Candidate from './Candidate'

class PrintCandidate extends Component {

    render() {
        const candidates = this.props.candidates;

        const message = Object.keys(candidates).length === 0 ? '' : 'Information Candidate is:';

        return (
            <div className="card- mt-5">
                <div className="cad-body">
                    <h2 className="card-title text-center">{message}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.candidates).map(candidate =>(
                            <Candidate
                            key = {candidate}
                            info = {this.props.candidates[candidate]}
                            />
                        ))}
                    </div>
                </div>
            </div>

        );
    }
}

export default PrintCandidate;