import React, { Component } from 'react';
import SearchUserGitHubForm from '../SearchUserGithub/SearchUserGitHubForm';
import ErrorSearchUser from '../../screens/Error/ErrorSearchUser';
import TableRepos from './TableRepos';



class SearchUserGithub extends Component {

    state = {
        error: '',
        consult: {},
        result: {}
    }

    componentDidUpdate(prevProps, preState) {
        if(preState.consult !== this.state.consult){
            this.consultApi();
        }
        
    }

    componentDidMount() {
        this.setState({
            error: false
        })
    }

    consultApi = () => {
        const { user } = this.state.consult;
        if (!user) return null

        //leer la url

        let url = `https://api.github.com/users/${user}/repos`

        //consultar con fetch
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    result: data
                })
            })
            .catch(error => {
                console.log(error)
            })



    }

    consultUser = search => {
        if (search.user === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                consult: search,
                error: false
            })
        }
    }

      render() {
        const ErrorExist = this.state.error;

        let finalResult;

        if (ErrorExist) {
            finalResult = <ErrorSearchUser />
        }else{
            finalResult= <TableRepos
            result={this.state.result}/>
        }

        return (
            <div >
                <SearchUserGitHubForm
                    consultUser={this.consultUser}
                />
                {finalResult}
            </div>
        )
    }
}

export default SearchUserGithub;