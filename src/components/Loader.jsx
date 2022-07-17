import { Bars } from  'react-loader-spinner'
import React, { Component } from 'react';
import styles from "../styles.css/styles.module.css";

export default class Loader extends Component{
    render() {
        return (
            <div className={styles.Loader}>
                <Bars
                    height="80"
                    width="80"
                    color='#00BFFF'
                    ariaLabel='loading'
                />
            </div>
        );
    }
};


