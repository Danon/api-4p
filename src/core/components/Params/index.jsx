import React from "react";
import Badge from "../Badge";
import styles from './styles.module.css';
import {match} from '../../placeholders';
import any from '../../utils';
import Lock from '@material-ui/icons/Lock';

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
                {
                    any(parameters) || any(schema)
                        ? <table className={styles.parameters}>
                            <thead>
                                <tr>
                                    <th>parameter</th>
                                    <th>example value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(parameters).map(([name, value]) => (
                                    <tr key={name}>
                                        <td>
                                            {code(this.suffix(name))}
                                            {code(type(value))}
                                            {name}
                                        </td>
                                        <td>{format(value)}</td>
                                    </tr>
                                ))}
                                {
                                    !any(schema)
                                        ? null
                                        : <tr>
                                            <td><code>schema{'{}'}</code> {'{'}...}</td>
                                            <td><u>show schema</u></td>
                                        </tr>
                                }
                            </tbody>
                        </table>
                        : <p className={styles.noParams}>This resource doesn't take any parameters :)</p>
                }
                <div style={{display: "flex"}}>
                    {requiresLogin ? <Badge color='#ffcccc'><Lock fontSize="small"/> Requires Login</Badge> : null}
                    {pagination ? <Badge color='#49cc90'>+ Pagination</Badge> : null}
                </div>
            </div>
        );
    }
}

function code(child) {
    if (child === null) {
        return null;
    }
    return <code style={{marginRight: '3px'}}>{child}</code>
}

function format(value) {
    if (typeof value === 'string') {
        return `"${value}"`;
    }
    return value;
}

function type(value) {
    const type = typeof value;
    if (type === 'number') {
        return 'int';
    }
    return type;
}
