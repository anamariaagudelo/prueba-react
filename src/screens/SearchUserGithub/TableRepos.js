import React, {Component} from 'react';

class TableRepos extends Component{

    
    
    render(){
      console.log(this.props.result)
        return(
            <div className="card-body">
            <table className="table">
                
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Url git</th>
                        <th scope="col">Default branchs</th>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody >
                    <tr className="table-active">
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default TableRepos;