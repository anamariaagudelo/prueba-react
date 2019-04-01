import React, { Component } from 'react';

class RowsRepos extends Component {



    render() {
        const { name, description, git_url, default_branch, language } = this.props.info;
        return (
            <tbody >
                <tr className="table-active">
                    <th scope="row"></th>
                    <th scope="col">{name}</th>
                    <th scope="col">{description}</th>
                    <th scope="col">{git_url}</th>
                    <th scope="col">{default_branch}</th>
                    <th scope="col">{language}</th>
                </tr>
            </tbody>
        );
        
    }
}

export default RowsRepos;