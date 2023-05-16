import { List } from './ImageGallery.styled';
import { PixabayAPI } from '../../services/pixabay-api';
import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
// import { Button } from 'components/common/Button';

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
    totalHits: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevWord = prevProps.searchedWord;
    const nextWord = this.props.searchedWord;

    pixabayAPI.searchedWord = nextWord;

    if (prevWord !== nextWord) {
      this.setState({ status: Status.PENDING });

      pixabayAPI.page = 1;

      pixabayAPI
        .fetchPhotos()
        .then(data =>
          this.setState({
            images: data.hits,
            status: Status.RESOLVED,
            totalHits: data.totalHits,
          })
        )
        .catch(error =>
          this.setState({ error: error.message, status: Status.REJECTED })
        );
    }
  }

  handleMoreBtnClick = () => {
    pixabayAPI.page += 1;
    pixabayAPI
      .fetchPhotos()
      .then(data =>
        this.setState(({ images }) => ({ images: [...images, ...data.hits] }))
      );
  };

  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <div>Введіть запит для пошуку.</div>;
    }

    if (status === 'resolved') {
      return (
        <div>
          <List>
            {images &&
              images.map(image => {
                return (
                  <ImageGalleryItem
                    key={image.id}
                    alt={image.tags}
                    webformatURL={image.webformatURL}
                    largeImageURL={image.largeImageURL}
                  />
                );
              })}
            {this.state.totalHits >= pixabayAPI.loadedPhotos() && (
              <button
                type="button"
                onClick={() => {
                  this.handleMoreBtnClick();
                }}
              >
                123456789
              </button>
            )}
          </List>
        </div>
      );
    }
  }
}
