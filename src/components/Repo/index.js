import React, { Component } from 'react';
import {
    RepoContainer,
    RepoImage,
    RepoInfo,
    RepoTitle,
    RepoAuthor,
    RepoInfoData,
    RepoButtonMenu,
    RepoTouchable,

} from './styles';

import Icon from 'react-native-vector-icons/Entypo';
import { Alert } from 'react-native';
export default class Repo extends Component {

    constructor(props) {
        super(props);

        this.handlePressDelete = this.handlePressDelete.bind(this);
    }

    handlePressDelete(title, id){
        const { onDeleteRepo } = this.props;
        Alert.alert(
            'Deletar',
            `Deseja realmente deletar ${title} ?`,
            [
              {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Deletar', onPress: () => onDeleteRepo(id)},
            ],
            { cancelable: false }
          );
    }

    render() {

        const { avatar, title, author, id } = this.props.data;
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
                    
                    <RepoButtonMenu onPress={() => this.handlePressDelete(title, id)} >
                        <Icon style={{paddingHorizontal:20}} name="trash" size={20} color="#a20000" />
                    </RepoButtonMenu>
                
                </RepoTouchable>

            </RepoContainer>
        );
    }
}