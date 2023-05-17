import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/common/Modal';
import { Section } from 'components/common/Section';

export class App extends Component {
  state = {
    searchedWord: '',
    showModal: false,
    largeImageURL: null,
    alt: null,
  };

  handleSearchFormSubmit = searchedWord => {
    this.setState({ searchedWord });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = (largeImgURL, tags) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImgURL,
      alt: tags,
    });
  };
  render() {
    return (
      <Container>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={this.state.largeImageURL}
              alt={this.state.alt}
              width={1100}
              height={800}
            />
          </Modal>
        )}
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <Section>
          <ImageGallery
            searchedWord={this.state.searchedWord}
            openModal={this.openModal}
          ></ImageGallery>
        </Section>
      </Container>
    );
  }
}
