import styled from 'styled-components';
import colors from '../../styles/colors';

export const RepoDetailsContainer = styled.View`
    flex: 1;
    background-color: ${ colors.primary };
    justify-content: center;
    align-items:center;
`;

export const RepoDetailsHeader = styled.View`
    flex: 1.5;
    justify-content: center;
    align-items: center;
    background-color: ${ colors.white };
    border-radius: 5px;
    margin:10px 0px;
    width: 90%;
`;

export const RepoDetailsImage = styled.Image`
    height: 100px;
    width: 100px;
    border-radius: 50px;
   
`;

export const RepoDetailsTitle = styled.Text`
    font-size: 16px;
    color:${ colors.third };
    font-weight: bold;
    margin-top: 10px;
`;

export const RepoDetailsDescription = styled.Text`
    margin: 10px 5px;
    font-size: 12px;
    color: ${ colors.fourth };
    text-align:center;
`;

export const RepoDetailsAuthor = styled.Text`
    color: ${ colors.fourth };
    font-weight:bold;
    font-size: 12px;

`;

export const RepoDetailsContent = styled.View`
    flex: 2;
    background-color: ${ colors.white };
    width: 90%;
    border-radius: 5px;
    margin-bottom:10px;
`;

export const RepoDetailsListScroll = styled.ScrollView`
     padding:15px;
`;

export const RepoDetailsListItem =  styled.View`
    padding: 10px 5px;
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    background-color:${ colors.white};
    border-bottom-width: 2px;
    border-color: ${ colors.fourth };
`;

export const RepoDetailsLabel = styled.Text`
    color:  ${ colors.third };
    font-weight: bold;

`;

export const RepoDetailValue = styled.Text`
    color: ${ colors.third };
`;