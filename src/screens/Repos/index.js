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
    }

    handlePushPageDetails(repo) {
        const { navigate } = this.props.navigation;
        navigate('RepoDetails', repo);
    }

    async componentDidMount() {
        const repos = JSON.parse(await AsyncStorage.getItem('@appFinanceiro:repos')) || [];
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

        

        await AsyncStorage.setItem('@appFinanceiro:repos', JSON.stringify(this.state.repos));
    }

    render() {

        console.log(console.log(this.state.repos));

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

