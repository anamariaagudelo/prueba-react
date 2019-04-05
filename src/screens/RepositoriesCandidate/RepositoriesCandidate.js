import React, { Component } from 'react';
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
                    error: 'Ocurrió un error al buscar los respositorios  del usuario registrado'
                })
            })
    }

    render() {

        return (
            <div className="container-fluid">
                <Header
                    nombre={this.state.candidate['name']}
                    lastName={this.state.candidate['lastName']}
                    id={this.state.candidate['id']}
                    date={this.state.candidate['birtDate']}
                    email={this.state.candidate['email']}
                    userGit={this.state.candidate['userGit']}
                />
                <TableRepos
                    repos={this.state.repos}
                />
            </div>
        )
    }
}

export default SearchUserGithub;