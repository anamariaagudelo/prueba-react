import React, { Component } from 'react'


class Candidate extends Component {

    render() {
        const { name, lastName, id, birtDate, email, userGit } = this.props.info;
        return (
            <div className="media mt-3">
                <div className="media-body">
                    <p className="card-text"><span>Name: </span>{name}</p>
                    <p className="card-text"><span>Last Name: </span>{lastName}</p>
                    <p className="card-text"><span>Id: </span>{id}</p>
                    <p className="card-text"><span>Birt Date: </span>{birtDate}</p>
                    <p className="card-text"><span>Email: </span>{email}</p>
                    <p className="card-text"><span>User Github: </span>{userGit}</p>
                </div>
            </div>
        );

    }
}

export default Candidate;