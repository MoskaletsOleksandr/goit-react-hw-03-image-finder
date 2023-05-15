import { Component } from 'react';
import { Container } from './App.styled';
import { SearchBar } from 'components/SearchBar';
import { ImageGallery } from 'components/ImageGallery';

export class App extends Component {
  state = {
    searchedWord: '',
  };

  handleSearchFormSubmit = searchedWord => {
    this.setState({ searchedWord });
  };

  render() {
    return (
      <Container>
        <SearchBar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery searchedWord={this.state.searchedWord}></ImageGallery>
      </Container>
    );
  }
}
