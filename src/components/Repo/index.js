import React, { Component } from 'react';
import {
    RepoContainer,
    RepoImage,
    RepoInfo,
    RepoTitle,
    RepoAuthor,
    RepoInfoData,
    RepoButtonMenu,
    RepoTouchable
} from './styles';
import Icon from 'react-native-vector-icons/Entypo';

export default class Repo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [{
                value: 'Banana',
            }, {
                value: 'Mango',
            }, {
                value: 'Pear',
            }]
        }

    }

    render() {

        const { avatar, title, author } = this.props.data;
        const { onPressRepo } = this.props;
        return (
            <RepoContainer>
                <RepoTouchable onPress={ () => onPressRepo(this.props.data)} >
                    <RepoInfo>
                        <RepoImage source={{ uri: avatar }} />
                        <RepoInfoData>
                            <RepoTitle>{title}</RepoTitle>
                            <RepoAuthor>{author}</RepoAuthor>
                        </RepoInfoData>
                    </RepoInfo>
                    <RepoButtonMenu>
                        <Icon name="dots-three-vertical" size={20} color="#999" />
                    </RepoButtonMenu>
                </RepoTouchable>
            </RepoContainer>
        );
    }
}