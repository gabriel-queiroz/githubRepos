import styled from 'styled-components';
import colors from '../../styles/colors';

export const Modal = styled.Modal.attrs({
    animationType: 'slide',
    transparent: true
})
``;

export const ModalContainer = styled.View`
    flex:1;
    background-color:rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
`;

export const ModalContent =  styled.View`
    padding: 20px;
    background-color:${ colors.second };
    border-radius: 10px;
    align-items: center;
    justify-content:space-around;
    width: 280px;
    height:250px;
`;

export const ModalTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: ${ colors.white };
`;

export const ModalInput = styled.TextInput.attrs({
    autoCapitalize:'none',
    underlineColorAndroid:'rgba(0, 0, 0, 0)',
    
})`
    align-self: stretch;
    margin-top: 10px;                                                                                                   
    padding: 0px 20px;
    border-radius: 3px;
    height: 40px;
    background-color:${ colors.white };
`;

export const ModalButtonsContainer = styled.View`
    margin-top: 10px;
    flex-direction:row;
    height:50px;
    align-self:flex-end;
`;

export const Button = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    background-color: ${props => props.cancel ? '#e25F5F':'#70BD85'};
    margin-left: ${props => props.cancel ? '0px':'5px'};
    margin-right: ${props => props.cancel ? '5px':'0px'};
`;

export const ButtonText = styled.Text`
    font-weight: bold;
    color: ${ colors.white };
    font-size: 12px;
`;