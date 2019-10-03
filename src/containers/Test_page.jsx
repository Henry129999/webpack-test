import * as React from 'react';
import {Component} from "react";
import styles from './Test_page.css';
import { obj, int } from '../help/dataMap';

class Test_page extends Component {

  render() {
    console.log('obj', obj);
    console.log('int', int);

    return(
      <div className={styles.box}>
        1111
        fhasdkhf
      </div>
    );
  }
}

export default Test_page;