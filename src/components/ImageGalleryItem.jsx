import React from "react";
import styles from "../styles.css/styles.module.css";
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({webformatURL, onClick }) => (
    <li className={styles.ImageGalleryItem} onClick={onClick}>
        <img className={styles.ImageGalleryItemImage} src={webformatURL} alt='' width='240' />
    </li>
);

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
};