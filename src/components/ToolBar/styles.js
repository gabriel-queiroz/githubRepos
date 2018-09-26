import styled from 'styled-components';
import colors from '../../styles/colors';

export const ToolBarContainer = styled.View`
    height:10px;
    padding:0px 10px;
    height:50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${ colors.second };
    width:100%;
`;

export const ToolBarTouchable = styled.TouchableOpacity`
    justify-content:flex-start;
    flex:2.5;
`;

export const ToolBarTitle = styled.Text`
    color: ${ colors.white } ;
    align-self: center;
    font-size: 18px;
    flex:2;
`;