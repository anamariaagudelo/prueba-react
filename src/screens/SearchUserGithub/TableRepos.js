import React, { Component } from 'react';
import RowsRepos from './RowsRepos'
import PaginationTable from '../../components/UI/Pagination/PaginationTable';



class TableRepos extends Component {


    render() {
        const repos = this.props.result;

        const message = Object.keys(repos).length === 0 ? 'No Repositories' : ''

        const pagination = Object.keys(repos).length === 0 ? '' : <div><PaginationTable /></div>
        return (
            <div className="container">
                <h2>{message}</h2>
                <div className="card-mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">NAME</th>
                                <th scope="col"></th>
                                <th scope="col">DESCRIPTION</th>
                                <th scope="col">URL GIT</th>
                                <th scope="col">DEFAULT BRANCHS</th>
                                <th scope="col">LANGUAGE</th>
                            </tr>
                        </thead>
                        {Object.keys(this.props.result).map(repo => (
                            <RowsRepos
                                key={repo}
                                info={this.props.result[repo]} />
                        ))}
                    </table>
                   
                <h2>{pagination}</h2>
            </div>
            </div >
        );
    }
}

export default TableRepos;