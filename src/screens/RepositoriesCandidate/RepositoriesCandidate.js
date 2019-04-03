import React, { Component } from 'react';
import Error from '../../components/UI/Error/Error'
import TableRepos from './TableRepos';
import CookiesCandidate from '../../components/Cookies/Cookies';


class SearchUserGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            repos: [],
            candidate: CookiesCandidate.getCookie('myCookie')
        }
        const user=(this.state.candidate)
        this.consultApi(user['userGit'])
    }


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
                    repos: data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    error: 'No se encontró el Repo'
                })
            })
    }

    render() {
        const ErrorExist = this.state.error;

        let finalResult;

        if (ErrorExist) {
            finalResult = <Error
                title='User Not Found' />
        } else {
            finalResult = <TableRepos
                repos={this.state.repos}
            />
        }

        return (
            <div >
                <div>
                    {JSON.stringify(this.state.candidate)}
                </div>
                {finalResult}
            </div>
        )
    }
}

export default SearchUserGithub;