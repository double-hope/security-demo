import React from 'react';
import * as styles from './styles';
const student1 = require('assets/images/student1.jpg');
const student2 = require('assets/images/student2.jpg');
const student3 = require('assets/images/student3.jpg');
const student4 = require('assets/images/student4.png');
const student5 = require('assets/images/student5.jpg');

const Background = () => {
  return (
    <div css={styles.background}>
        <div css={styles.blue} rounded-div={['rTop']} />
        <div css={styles.lilac} rounded-div={['lTop', 'lBottom']} />
        <div css={styles.image(student1)} rounded-div={['rBottom']} />
        <div css={styles.black} rounded-div={['rTop']} />
        <div css={styles.black} rounded-div={['lTop']} />
        <div css={styles.image(student2)} rounded-div={['lBottom']} />
        <div css={styles.blue} rounded-div={['rTop', 'lBottom']} />
        <div css={styles.black} rounded-div={['rTop']} />
        <div css={styles.image(student3)} rounded-div={['lTop']} />
        <div css={styles.blue} rounded-div={['rTop', 'rBottom']} />
        <div css={styles.lilac} rounded-div={['lBottom']} />
        <div css={styles.image(student4)} rounded-div={['lBottom']} />
        <div css={styles.blue} rounded-div={['rTop']} />
        <div css={styles.black} rounded-div={['lTop']} />
        <div css={styles.image(student5)} rounded-div={['lBottom']} />
        <div css={styles.lilac} rounded-div={['rTop', 'lBottom']} />
    </div>
  )
}

export { Background };