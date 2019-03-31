import React, { Component } from 'react';
import SearchUserGitHubForm from '../SearchUserGithub/SearchUserGitHubForm';
import ErrorSearchUser from '../../screens/Error/ErrorSearchUser'


class SearchUserGithub extends Component {

    state = {
        error: '',
        consult: {},
        result: {}
    }

    componentDidUpdate() {
        this.consultApi();
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
                consult: search
            })
        }
    }

    render() {
        const ErrorExist = this.state.error;

        let resultError;

        if (ErrorExist) {
            resultError = <ErrorSearchUser />
        }

        return (
            <div >
                <SearchUserGitHubForm
                    consultUser={this.consultUser}
                />
                {resultError}
                <p>Tabla</p>
            </div>
        )
    }
}

export default SearchUserGithub;