import React, { Component } from 'react'
import {
  RepoDetailsContainer,
  RepoDetailsTitle,
  RepoDetailsHeader,
  RepoDetailsImage,
  RepoDetailsContent,
  RepoDetailsAuthor,
  RepoDetailsListScroll,
  RepoDetailsListItem,
  RepoDetailsLabel,
  RepoDetailValue
} from './styles';
import StatusBar from '../../components/StatusBar';

export default class RepoDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repo: {},
    }
  }

  componentDidMount() {
    const { id, stars, title, avatar, author, forks, lastCommit, issues } = this.props.navigation.state.params;
    const repo = {
      id, stars, title, avatar, author, forks, lastCommit, issues
    };

    this.setState({ repo });
  }

  render() {


    const { stars, title, avatar, author, forks, lastCommit, issues } = this.state.repo;

    return (
      <RepoDetailsContainer>
        
        <StatusBar />

        <RepoDetailsHeader>
          
          <RepoDetailsImage source={{ uri: avatar }} />
          <RepoDetailsTitle>{title}</RepoDetailsTitle>
          <RepoDetailsAuthor>{author}</RepoDetailsAuthor>
        
        </RepoDetailsHeader>

        <RepoDetailsContent>

          <RepoDetailsListScroll>
            
            <RepoDetailsListItem>
              <RepoDetailsLabel>Stars: </RepoDetailsLabel>
              <RepoDetailValue>{stars}</RepoDetailValue>
            </RepoDetailsListItem>
            
            <RepoDetailsListItem>
              <RepoDetailsLabel>Forks: </RepoDetailsLabel>
              <RepoDetailValue>{forks}</RepoDetailValue>
            </RepoDetailsListItem>
            
            <RepoDetailsListItem>
              <RepoDetailsLabel>Issues: </RepoDetailsLabel>
              <RepoDetailValue>{issues}</RepoDetailValue>
            </RepoDetailsListItem>
            
            <RepoDetailsListItem>
              <RepoDetailsLabel>Último Commit: </RepoDetailsLabel>
              <RepoDetailValue>{lastCommit}</RepoDetailValue>
            </RepoDetailsListItem>
          
          </RepoDetailsListScroll>

        </RepoDetailsContent>
      
      </RepoDetailsContainer>
    );
  }
}
