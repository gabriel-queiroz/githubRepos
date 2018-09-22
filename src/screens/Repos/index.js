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
import NewRepoModal from '../../components/NewRepoModal';

import moment from 'moment';

import { getRepoByPath } from '../../services/repos';
import Icon from 'react-native-vector-icons/Feather';
import Spinner from 'react-native-loading-spinner-overlay';


export default class Repos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            modalVisible: false,
            repos: [],
            isLoading: false,
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
        await this.setState({
            isLoading: true,
            modalVisible: false,
        });

        try {

            const repoCall = await getRepoByPath(newRepoText);
            const { data } = repoCall;

            const repository = {
                id: data.id,
                description: data.description,
                avatar: data.owner.avatar_url,
                title: data.name,
                author: data.owner.login,
                stars: data.stargazers_count,
                forks: data.forks_count,
                issues: data.open_issues_count,
                lastCommit: moment(data.pushed_at).fromNow(),
            };

            await this.setState({
                repos: [...this.state.repos, repository]
            });
            await this.setState({ isLoading: false });
            await AsyncStorage.setItem('@githubrepos:repos', JSON.stringify(this.state.repos));
        } catch (Error) {
            this.setState({ isLoading: false });
        }
    }

    async handleDeleteRepo(id) {

        const repos = JSON.parse(await AsyncStorage.getItem('@githubrepos:repos'));
        const index = repos.findIndex(i => i.id === id);
        repos.splice(index, 1);
        this.setState({ repos });
        await AsyncStorage.setItem('@githubrepos:repos', JSON.stringify(repos));
    }

    render() {

        const { modalVisible, repos, isLoading } = this.state;

        return (
            <Container>
                <StatusBar />
                <Header>
                    <Button onPress={this.props.navigation.toggleDrawer} >
                        <Icon name="menu" size={25} color="#FFF" />
                    </Button>
                    <Title>Github Repos</Title>
                    <Button onPress={this.handleOpenModal}>
                        <Icon name="plus" size={25} color="#FFF"/>
                    </Button>
                </Header>
                <ReposListScroll>
                    {repos.map(repo => (
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
                <Spinner
                    visible={isLoading}
                    textContent="Carregando"
                    textStyle={{ color: '#FFF' }}
                    overlayColor="rgba(0, 0, 0, 0.9)"

                />
            </Container>
        );
    }
}

