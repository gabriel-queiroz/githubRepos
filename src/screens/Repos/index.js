import React, { Component } from 'react';
import {
    Container,
    Title,
    Header,
    ReposListScroll,
    Button,
    ButtonText,
    StatusBar
}
    from './styles';
import { AsyncStorage } from 'react-native';
import Repo from '../../components/Repo';
import moment from 'moment';
import NewRepoModal from '../../components/NewRepoModal';

export default class Repos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            repos: []
        }
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleAddRepo = this.handleAddRepo.bind(this);
        this.handlePushPageDetails = this.handlePushPageDetails.bind(this);
        this.handleDeleteRepo = this.handleDeleteRepo.bind(this);
    }

    handlePushPageDetails(repo) {
        const { navigate } = this.props.navigation;
        navigate('RepoDetails', repo);
    }

    async componentDidMount() {
        const repos = JSON.parse(await AsyncStorage.getItem('@githubrepos:repos')) || [];
        this.setState({ repos });
    }

    handleOpenModal() {
        this.setState({ modalVisible: true });
    }
    handleCloseModal() {
        this.setState({ modalVisible: false });
    }

    async handleAddRepo(newRepoText) {
        const repoCall = await fetch(`http://api.github.com/repos/${newRepoText}`);
        const response = await repoCall.json();
        const repository = {
            
            id:         response.id,
            avatar:     response.owner.avatar_url,
            title:      response.name,
            author:     response.owner.login,
            stars:      response.stargazers_count,
            forks:      response.forks_count,
            issues:     response.open_issues_count,
            lastCommit: moment(response.pushed_at).fromNow(),

        };
        this.setState({
            modalVisible: false,
            repos: [...this.state.repos, repository]
        });
        await AsyncStorage.setItem('@githubrepos:repos', JSON.stringify(this.state.repos));
    }

    async handleDeleteRepo(id){

        const repos = JSON.parse(await AsyncStorage.getItem('@githubrepos:repos'));
        const index = repos.findIndex(i => i.id === id );
        repos.splice(index, 1);
        this.setState({repos});
        await AsyncStorage.setItem('@githubrepos:repos', JSON.stringify(repos)); 
    }

    render() {

        const { modalVisible, repos } = this.state;

        return (
            <Container>
                <StatusBar />
                <Header>
                    <Title>Github Repos</Title>
                    <Button onPress={this.handleOpenModal}>
                        <ButtonText>+</ButtonText>
                    </Button>
                </Header>
                <ReposListScroll>
                    {repos.map((repo) => (
                        <Repo 
                            key={repo.id} 
                            onPressRepo={this.handlePushPageDetails}
                            onDeleteRepo={this.handleDeleteRepo}
                            data={repo} />
                    ))
                    }
                </ReposListScroll>
                <NewRepoModal
                    visible={modalVisible}
                    onCloseModal={this.handleCloseModal}
                    onAddRepo={this.handleAddRepo}
                />
            </Container>
        );
    }
}

