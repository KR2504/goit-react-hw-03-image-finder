import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from "../styles.css/styles.module.css";
import { VscSearch } from "react-icons/vsc";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class Searchbar extends Component {
    
    state = {
        value: '',
    }

handleChangeName = e => {
        this.setState({
            value: e.currentTarget.value,
        });
    };

    handleSubmit = e => {
        const { value } = this.state;
        e.preventDefault();

        if (value.trim() === '') {
            Notify.warning("Please enter something!")
            return;
        }

        this.props.onSubmit(value);
        this.setState({ value: '' });
    }
    render() {
        return (
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.SearchForm_button}>
                        <span><VscSearch className={styles.SearchForm_icon} /></span>
                    </button>

                    <input
                        value={this.state.value}
                        onChange={this.handleChangeName}
                        className={styles.SearchForm_input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
};

Notify.init({
    width: '280px',
    position: 'right-top',
    distance: '30px',
    borderRadius: '10px',
    timeout: 2000,
    cssAnimationStyle: 'from-right',
})

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,    
  };