import React from 'react';
import { ToolBarContainer, ToolBarTouchable, ToolBarTitle } from './styles';
import Icon from 'react-native-vector-icons/Feather';

const ToolBar = ({ goBack, title }) =>
    (
        <ToolBarContainer>
            <ToolBarTouchable onPress={() => goBack()} >
                <Icon name="arrow-left" size={25} color="#fff" />
            </ToolBarTouchable>
            <ToolBarTitle>{title}</ToolBarTitle>
            <ToolBarTouchable>
            </ToolBarTouchable>
        </ToolBarContainer>
    );

export default ToolBar;