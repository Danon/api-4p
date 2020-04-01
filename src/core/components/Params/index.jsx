import React from "react";
import Lock from '@material-ui/icons/Lock';

import Badge from "../Badge";
import ParamsTable from '../ParamsTable';
import {match} from '../../placeholders';

import styles from './styles.module.css';

export default class extends React.Component {
    suffix(name) {
        if (match(this.props.url).includes(name)) {
            return 'path/';
        }
        if (this.props.method === 'GET') {
            return 'query?'
        }
        return null;
    }

    get badgeColor() {
        const colors = {
            POST: '#49cc90',
            GET: '#61affe',
            PUT: '#fca130',
        };
        return colors[this.props.method];
    }

    get placeholders() {
        return match(this.props.url);
    }

    render() {
        const {url, method, parameters, schema, pagination, requiresLogin} = this.props;
        return (
            <div className={styles.params}>
                <header>
                    <Badge color={this.badgeColor}>{method}</Badge>
                    <span className={styles.endpoint}>{url}</span>
                </header>
                <ParamsTable method={method} url={url} parameters={parameters} schema={schema}/>
                <div style={{display: "flex"}}>
                    {requiresLogin ? <Badge color='#ffcccc'><Lock fontSize="small"/> Requires Login</Badge> : null}
                    {pagination ? <Badge color='#49cc90'>+ Pagination</Badge> : null}
                </div>
            </div>
        );
    }
}
