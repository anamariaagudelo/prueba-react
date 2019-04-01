import React, { Component } from 'react';
import RowsRepos from './RowsRepos'


class TableRepos extends Component {


    render() {
        const repos = this.props.result;

        const message = Object.keys(repos).length === 0 ? 'No Hay Repositorios' : ''
        return (
            <div>
                <h2>{message}</h2>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                                <th scope="col">Description</th>
                                <th scope="col">Url git</th>
                                <th scope="col">Default branchs</th>
                                <th scope="col">Language</th>
                            </tr>
                        </thead>
                        {Object.keys(this.props.result).map(repo => (
                            <RowsRepos
                                key={repo}
                                info={this.props.result[repo]} />
                        ))}
                    </table>
                </div>
            </div>
        );
    }
}

export default TableRepos;