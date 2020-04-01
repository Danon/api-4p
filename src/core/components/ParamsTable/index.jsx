import React from "react";
import TextField from '@material-ui/core/TextField';

import SchemaDialog from "../SchemaDialog";
import {match} from "../../placeholders";
import Code from '../Code';
import any from "../../utils";

import styles from "./styles.module.css";

export default function ({method, url, parameters, schema}) {
    function suffix(name) {
        if (match(url).includes(name)) {
            return 'path/';
        }
        if (method === 'GET') {
            return 'query?'
        }
        return null;
    }

    if (any(parameters) || any(schema)) {
        return table({parameters, suffix, schema});
    }
    return <p className={styles.noParams}>This resource doesn't take any parameters :)</p>
}

function table({parameters, suffix, schema}) {
    return <table className={styles.parameters}>
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
                        {code(suffix(name))}
                        {code(type(value))}
                        {name}
                    </td>
                    <td><TextField label={name} value={value}/></td>
                </tr>
            ))}
            {
                !any(schema) ? null : <tr>
                    <td>
                        <code>schema{'{}'}</code> {'{'}...}
                    </td>
                    <td>
                        <SchemaDialog>
                            <div className={styles.minWidthCode}>
                                <Code language="json">
                                    {JSON.stringify(schema, null, 2)}
                                </Code>
                            </div>
                        </SchemaDialog>
                    </td>
                </tr>
            }
        </tbody>
    </table>;
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
