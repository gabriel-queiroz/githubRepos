import styled from 'styled-components';


export const RepoContainer = styled.View`
    background-color: #FFF;
    margin-bottom: 20px;
    border-radius: 5px;
    flex:1;
`;

export const RepoTouchable = styled.TouchableOpacity`
    flex-direction:row;
    padding:20px;
    flex:1;
    align-items:center;
    justify-content: space-between;
`;

export const RepoImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const RepoButtonMenu = styled.TouchableOpacity`

`;

export const RepoInfo = styled.View`
    margin-left: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const RepoInfoData = styled.View`
    margin-left:10px;
    justify-content:center;
`;

export const RepoTitle = styled.Text`
    font-weight: bold;
    color:#333;
`;

export const RepoAuthor = styled.Text`
    font-size:12px;
    color:#999;
`;