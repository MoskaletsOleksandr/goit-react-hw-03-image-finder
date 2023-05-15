import { List } from './ImageGallery.styled';
import {PixabayAPI} from '../../services/pixabay-api';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const pixabayAPI = new PixabayAPI();

export class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,
  };
    
  componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchedWord;
    const nextWord = this.props.searchedWord;

    pixabayAPI.searchedWord = nextWord;

    if (prevWord !== nextWord) {
      this.setState({ status: Status.PENDING });

      pixabayAPI
        .fetchPhotos(nextWord)
        .then(data =>
          this.setState({ images: data.hits, status: Status.RESOLVED })
        )
        .catch(error =>
          this.setState({ error: error.message, status: Status.REJECTED })
        );
    }
  }

  render() {
      return <List>
          {this.state.images && this.state.images.map((image) => {
              return (
                  <ImageGalleryItem key={image.id} alt={image.tags} webformatURL={image.webformatURL} largeImageURL={image.largeImageURL} />
              )
          })}
      </List>;
  }
}
