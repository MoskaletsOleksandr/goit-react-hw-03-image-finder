import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';
import { Modal } from 'components/common/Modal';


export class App extends Component {
  state = {
    searchedWord: '',
        showModal: false,

  };

  handleSearchFormSubmit = searchedWord => {
    this.setState({ searchedWord });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  };
  
  render() {
    return (
      <Container>
        <button type='button' onClick={this.toggleModal} >modal</button>
        {this.state.showModal && <Modal onClose={this.toggleModal}>sfsagdgddsh
        <button type='button' onClick={this.toggleModal} >close</button></Modal>}
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery searchedWord={this.state.searchedWord}></ImageGallery>
      </Container>
    );
  }
}
