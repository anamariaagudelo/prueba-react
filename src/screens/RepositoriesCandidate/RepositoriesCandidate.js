import React, { Component } from 'react';
import Error from '../../components/UI/Error/Error'
import TableRepos from './TableRepos';
import CookiesCandidate from '../../components/Cookies/Cookies';
import Header from '../../components/UI/Header/Header';


class SearchUserGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            repos: [],
            candidate: CookiesCandidate.getCookie('myCookie'),
            user: '',
        }
        const user = this.state.candidate
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
            console.log('este es el usuario de las cookies:',user);
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
                    <Header
                        nombre={this.state.candidate['name']}
                        lastName={this.state.candidate['lastName']}
                        id={this.state.candidate['id']}
                        date={this.state.candidate['birtDate']}
                        email={this.state.candidate['email']}
                        userGit={this.state.candidate['userGit']}
                    />
                </div>
                {finalResult}
            </div>
        )
    }
}

export default SearchUserGithub;