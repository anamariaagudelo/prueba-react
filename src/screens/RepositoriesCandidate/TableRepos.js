import React, { Component } from 'react';
import RowsRepos from './RowsRepos'
import * as R from 'ramda';
/*import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';*/



class TableRepos extends Component {


    render() {

        // const options = {
        //     sizePerPage: 5,
        //     hideSizePerPage: true,
        //     hidePageListOnlyOnePage: true
        // };

        // const columns = [{
        //     dataField: 'name',
        //     text: 'NAME'
        //   }, {
        //     dataField: 'description',
        //     text: 'DESCRIPTION'
        //   }, {
        //     dataField: 'git_url',
        //     text: 'URL_GIT',
        //   },
        //     {
        //         dataField: 'default_branch',
        //         text: 'URL_GIT',
        //     },{
        //         dataField: 'language',
        //         text: 'LANGUAGE',         
        //   }];

        const repos = R.pathOr([], ['repos'])(this.props)

        const message = repos.length ? '' : 'No Repositories'

        return (
            <div className="container">
                <h2>{message}</h2>
                <div className="card-mt-5">
                        {/* <BootstrapTable
                            keyField="id"
                            data={repos.map(repo => (
                                <RowsRepos
                                    key={repo.id}
                                    info={repo} />
                            ))}
                            columns={columns}
                            pagination={paginationFactory(options)}
                        /> */
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
                        {repos.map(repo => (
                            <RowsRepos
                                key={repo.id}
                                info={repo} />
                        ))}
                    </table>}
                </div>
                </div >
                );
            }
        }
        
export default TableRepos;