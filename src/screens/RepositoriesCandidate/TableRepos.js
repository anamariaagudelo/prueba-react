import React, { Component } from 'react';
import * as R from 'ramda';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';




class TableRepos extends Component {


    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

        const columns = [{
            dataField: 'name',
            text: 'NAME',
            filter: textFilter(),
            sort: true
        }, {
            dataField: 'description',
            text: 'DESCRIPTION',
            sort: true
        }, {
            dataField: 'git_url',
            text: 'URL_GIT',
            sort: true
        },
        {
            dataField: 'default_branch',
            text: 'DEFAULT_BRANCH',
            sort: true
        }, {
            dataField: 'language',
            text: 'LANGUAGE',
            sort: true
        }];

        const repos = R.pathOr([], ['repos'])(this.props)

        const message = repos.length ? '' : 'No Repositories'

        return (
            <div className="container-fluid">
                <h2>{message}</h2>
                <div className="card border-primary text-white bg-dark mb-3" >
                    <div className="card-body">
                        <BootstrapTable striped bordered hover variant="dark" 
                            maxHeight='120px'
                            data={repos}
                            keyField="id"
                            columns={columns}
                            pagination={paginationFactory(options)}
                            filter={filterFactory()}
                            defaultSortDirection="asc"
                        />
                    </div>
                </div>


            </div>
        );
    }
}

export default TableRepos;