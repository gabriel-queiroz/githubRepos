import styled from 'styled-components';

export const ToolBarContainer = styled.View`
    height:10px;
    padding:0px 10px;
    height:50px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #0465;
    width:100%;
`;

export const ToolBarTouchable = styled.TouchableOpacity`
    justify-content:flex-start;
    flex:2.5;
`;

export const ToolBarTitle = styled.Text`
    color:#FFF;
    align-self: center;
    font-size: 18px;
    flex:2;
`;