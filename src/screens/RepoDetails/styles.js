import styled from 'styled-components';


export const RepoDetailsContainer = styled.View`
    flex: 1;
    background-color: #046595;
    justify-content: center;
    align-items:center;
`;

export const RepoDetailsHeader = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    margin:10px 0px;
    width: 80%;
`;

export const RepoDetailsImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
   
`;

export const RepoDetailsTitle = styled.Text`
    font-size: 16px;
    color:#CCC;
    font-weight: bold;
    margin-top: 10px;
`;

export const RepoDetailsAuthor = styled.Text`
    color: #CCC;
    font-size: 12px;

`;

export const RepoDetailsContent = styled.View`
    flex: 2;
    background-color:#FFF;
    width: 90%;
    border-radius: 5px;
`;

export const RepoDetailsListScroll = styled.ScrollView`
     padding:15px;
     flex:1;
     margin-bottom: 10px;
`;

export const RepoDetailsListItem =  styled.View`
    padding: 10px 5px;
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    background-color:#fff;
    border-bottom-width: 2px;
    border-color:#ccc;
`;

export const RepoDetailsLabel = styled.Text`
    color:#222;
    font-weight: bold;

`;

export const RepoDetailValue = styled.Text`
    color:#222;
`;