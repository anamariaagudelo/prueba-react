import React, { Component } from 'react';
import * as R from 'ramda';
import { TableHeaderColumn, BootstrapTable } from 'react-bootstrap-table';

//redux
import {connect} from 'react-redux';


class TableRepos extends Component {

    

    render() {

        const options = {
            sizePerPage: 5,
            hideSizePerPage: true,
            hidePageListOnlyOnePage: true
        };

        const repos = R.pathOr([], ['repos'])(this.props)

        const message = repos.length ? '' : 'No hay repositorios'

        return (
            <div className="container-flex">
                <h2 className="text-center">{message}</h2>
                <div className="card border-primary text-white bg-dark mb-3 overflow-auto" >
                    <div className="card-body">
                        <BootstrapTable striped bordered hover variant="dark" overflow-auto
                            keyField='id'
                            data= {repos[0]}
                            options={options}
                            pagination
                            search
                            searchPlaceholder='Filtrar'
                            headerStyle={{ background: ' #e6e5e5' }}
                        >
                            <TableHeaderColumn dataField='name' dataSort={true}>NOMBRE</TableHeaderColumn>
                            <TableHeaderColumn dataField='description' dataSort={true}>DESCRIPCIÓN</TableHeaderColumn>
                            <TableHeaderColumn dataField='git_url' dataSort={true}>URLGIT</TableHeaderColumn>
                            <TableHeaderColumn dataField='default_branch' dataSort={true}>BRANCH POR DEFECTO</TableHeaderColumn>
                            <TableHeaderColumn dataField='language' dataSort={true}>LENGUAJE</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps= state=>({
    repos: state.repos.repos
})

export default connect(mapStateToProps)(TableRepos);