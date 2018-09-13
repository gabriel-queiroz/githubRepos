import React, { Component } from 'react'
import {
  Modal,
  ModalContainer,
  ModalContent,
  ModalTitle,
  ModalInput,
  ModalButtonsContainer,
  Button,
  ButtonText

} from './styles';


export default class NewRepoModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newRepoText: '',
    }
    this.handlePressAdd = this.handlePressAdd.bind(this);
    this.handlePressCancel = this.handlePressCancel.bind(this);
  }

  handlePressAdd(){
    this.props.onAddRepo(this.state.newRepoText);
    this.setState({ newRepoText: '' });
  }

  handlePressCancel(){
    this.props.onCloseModal();
    this.setState({ newRepoText: '' });
  }

  render() {

    const { newRepoText } = this.state;
    const { visible, onCloseModal } = this.props;

    return (
      <Modal
        visible={visible}
        onRequestClose={onCloseModal}
      >
        <ModalContainer>
          <ModalContent>
            <ModalTitle>Adicionar Repositório</ModalTitle>
           
            <ModalInput
              autoFocus
              placeHolder="organização/reposotório"
              value={newRepoText}
              onChangeText={ newRepoText => this.setState({ newRepoText }) }
             
            />
            <ModalButtonsContainer>
              <Button cancel onPress={this.handlePressCancel}>
                <ButtonText>
                  Cancelar
                </ButtonText>
              </Button>
              <Button  onPress={this.handlePressAdd}>
                <ButtonText>
                  Adicionar
                </ButtonText>
              </Button>
            </ModalButtonsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    )
  }
}
