import React, { Component } from 'react';
import SearchUserGitHubForm from '../SearchUserGithub/SearchUserGitHubForm';
import Error from '../../components/UI/Error/Error'
import TableRepos from './TableRepos';



class SearchUserGithub extends Component {

    state = {
        error: '',
        result: {}
    }
/*
    componentDidUpdate(prevProps, preState) {
        if(preState.consult !== this.state.consult){
            this.consultApi();
        }
        
    }
    */

    /*componentDidMount() {
        this.setState({
            error: false
        })
    }*/

    consultApi = (user) => {
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
                this.setState({
                    error: 'No se encontró en Repo'
                })
            })
    }

    consultUser = search => {
        if (search.user === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })
            this.consultApi(search.user)
        }
    }

      render() {
        const ErrorExist = this.state.error;

        let finalResult;

        if (ErrorExist) {
            finalResult = <Error 
            title='User Github Required'/>
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