import styled from 'styled-components';
import colors from '../../styles/colors';

export const Menu = styled.View`
    background-color: ${ colors.white };
    flex: 1;
`;

export const MenuItem = styled.TouchableOpacity``;

export const MenuItemText = styled.Text`
    margin:0 auto;
    color: ${ colors.third };
    font-size: 16px;
    padding: 10px 5px;
    border-color: ${ colors.fourth };
    border-bottom-width:0.5px;
    border-bottom-color: ${ colors.fourth };
    width: 90% ;
`;