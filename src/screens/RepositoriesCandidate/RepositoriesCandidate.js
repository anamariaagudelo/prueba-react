import React, { Component } from 'react';
import TableRepos from './TableRepos';
import Header from '../../components/UI/Header/Header';
import CookiesCandidate from '../../components/Cookies/Cookies';
import ErrorComponent from '../../components/UI/Error/Error';

//redux
import { connect } from 'react-redux';
import { setRepos } from '../../redux/actions/reposActions';
import { mostratError } from '../../redux/actions/errorActions';

class SearchUserGithub extends Component {
    componentDidMount() {
        this.getUser()
    }

    componentWillMount() {
        this.props.mostratError(false);
    }

    state = {
        user: CookiesCandidate.getCookie('myCookie'),
    }

    getUser() {
        const userGit = this.state.user
        if (!userGit) {
            this.props.mostratError(true)
        } else {
            this.consultApi(userGit['userGit']);
        }
    }


    consultApi = (userGit) => {
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
        const ErrorExist = this.props.error;
        return (
            <div className="container-fluid">
                {ErrorExist ? <ErrorComponent title='Ocurrió un error al buscar los respositorios  del usuario registrado'/> :
                    <Header
                        nombre={this.state.user['name']}
                        lastName={this.state.user['lastName']}
                        id={this.state.user['id']}
                        date={this.state.user['birtDate']}
                        email={this.state.user['email']}
                        userGit={this.state.user['userGit']}
                    />}

                <TableRepos />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repos: state.repos.repos,
    error: state.error.error
})

export default connect(mapStateToProps, { setRepos, mostratError })(SearchUserGithub);