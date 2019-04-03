import React, { Component } from 'react';
import * as R from 'ramda';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';



class TableRepos extends Component {


    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

        const columns = [{
            dataField: 'name',
            text: 'NAME'
        }, {
            dataField: 'description',
            text: 'DESCRIPTION'
        }, {
            dataField: 'git_url',
            text: 'URL_GIT',
        },
        {
            dataField: 'default_branch',
            text: 'DEFAULT_BRANCH',
        }, {
            dataField: 'language',
            text: 'LANGUAGE',
        }];

        const repos = R.pathOr([], ['repos'])(this.props)

        const message = repos.length ? '' : 'No Repositories'

        return (
            <div className="container">
                <h2>{message}</h2>
                <div className="card-mt-5">
                    <BootstrapTable
                        data={repos}
                        keyField="id"
                        columns={columns}
                        pagination={paginationFactory(options)}
                    />
                </div>
            </div >
        );
    }
}

export default TableRepos;