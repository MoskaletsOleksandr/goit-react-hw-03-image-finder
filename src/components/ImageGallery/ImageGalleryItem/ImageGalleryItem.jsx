import { Item, GalleryImg } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({webformatURL, largeImageURL, alt}) => {
    return (
        <Item>
            <GalleryImg src={webformatURL} alt={alt} />
        </Item>
    )
}