import React, { Component } from 'react';
import * as R from 'ramda';
import { TableHeaderColumn,BootstrapTable } from 'react-bootstrap-table';





class TableRepos extends Component {


    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

        const repos = R.pathOr([], ['repos'])(this.props)

        const message = repos.length ? '' : 'No Repositories'

        return (
            <div className="container-flex">
                <h2 className="text-center">{message}</h2>
                <div className="card border-primary text-white bg-dark mb-3 overflow-auto" >
                    <div className="card-body">
                        <BootstrapTable striped bordered hover variant="dark" overflow-auto
                            data={repos} 
                            keyField="id"
                            options={options}
                            pagination
                            search 
                            searchPlaceholder='Filtrar'
                            headerStyle={ { background: '#eeee' } }
                        >
                            <TableHeaderColumn dataField='name' dataSort={ true }>NOMBRE</TableHeaderColumn>
                            <TableHeaderColumn dataField='description' dataSort={ true }>DESCRIPCIÓN</TableHeaderColumn>
                            <TableHeaderColumn dataField='git_url' dataSort={ true }>URL_GIT</TableHeaderColumn>
                            <TableHeaderColumn dataField='default_branch' dataSort={ true }>DEFAULT_BRANCH</TableHeaderColumn>
                            <TableHeaderColumn dataField='language' dataSort={ true }>LENGUJE</TableHeaderColumn>
                        </BootstrapTable>       
                    </div>
                </div>
            </div>
        );
    }
}

export default TableRepos;