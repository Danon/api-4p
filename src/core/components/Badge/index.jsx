import React from "react";
import styles from './styles.module.css';

export default ({color, children}) => <div className={styles.badge} style={{backgroundColor: color}}>
    <div className={styles.wrapper}>{children}</div>
</div>;