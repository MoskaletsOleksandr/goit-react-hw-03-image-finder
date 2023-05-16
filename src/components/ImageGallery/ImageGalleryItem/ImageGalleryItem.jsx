import { Item, GalleryImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  alt,
  openModal,
}) => {
  return (
    <Item
      onClick={() => {
        openModal(largeImageURL);
      }}
    >
      <GalleryImg src={webformatURL} alt={alt} />
    </Item>
  );
};
