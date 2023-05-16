import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/common/Modal';

export class App extends Component {
  state = {
    searchedWord: '',
    showModal: false,
    largeImageURL: null,
  };

  handleSearchFormSubmit = searchedWord => {
    this.setState({ searchedWord });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = largeImgURL => {
    this.setState({
      showModal: true,
      largeImageURL: largeImgURL,
    });
  };
  render() {
    return (
      <Container>
        <button type="button" onClick={this.toggleModal}>
          modal
        </button>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={this.state.largeImageURL}
              alt=""
              width={1100}
              height={800}
            />
          </Modal>
        )}
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery
          searchedWord={this.state.searchedWord}
          openModal={this.openModal}
        ></ImageGallery>
      </Container>
    );
  }
}
