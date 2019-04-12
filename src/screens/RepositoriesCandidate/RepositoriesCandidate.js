import React, { Component } from 'react';
import TableRepos from './TableRepos';
import Header from '../../components/UI/Header/Header';
import CookiesCandidate from '../../components/Cookies/Cookies';

//redux
import {connect} from 'react-redux';
import {setRepos} from '../../redux/actions/reposActions'

class SearchUserGithub extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            user: CookiesCandidate.getCookie('myCookie'),
        }
        const userGit = this.state.user
        this.consultApi(userGit['userGit']);
    }


    consultApi = (userGit) => {
        if (!userGit) {
            this.setState({
                error: 'Ocurrió un error al buscar los respositorios  del usuario registrado'
            })
        }

        //leer la url
        let url = `https://api.github.com/users/${userGit}/repos`

        //consultar con fetch
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.props.setRepos(data)
                })
            .catch(error => {
                console.log(error)
            })
    }

    render() {

        return (
            <div className="container-fluid">
                <Header
                    nombre={this.state.user['name']}
                    lastName={this.state.user['lastName']}
                    id={this.state.user['id']}
                    date={this.state.user['birtDate']}
                    email={this.state.user['email']}
                    userGit={this.state.user['userGit']}
                />
                <TableRepos/>
            </div>
        )
    }
}

const mapStateToProps= state=>({
    repos: state.repos.repos
})

export default connect(mapStateToProps,{setRepos}) (SearchUserGithub);