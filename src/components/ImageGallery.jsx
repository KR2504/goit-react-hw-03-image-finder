import React from "react";
import styles from "../styles.css/styles.module.css";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "./ImageGalleryItem";

export const ImageGallery = ({ images, largeImage }) => (
    <ul className={styles.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => {
           const handleItemClick = () => largeImage(largeImageURL);
            return (
                <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={handleItemClick} />
            )
        })}
    </ul>
);

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            webformatURL: PropTypes.string,
            largeImageURL: PropTypes.string,
}).isRequired
    ),
    largeImage: PropTypes.func.isRequired,
};

    
