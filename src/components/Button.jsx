import React from "react";
import PropTypes from 'prop-types';
import styles from "../styles.css/styles.module.css";

export const Button = ({ onClick }) => (
    <button type="button" onClick={onClick} className={styles.Button}>
        Load more
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};