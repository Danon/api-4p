import React from 'react';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ToggleEnvironment from "../ToggleEnvironment";
import Params from '../Params';
import Fetch from '../Fetch';
import Curl from '../Curl';

import styles from "./styles.module.css";

export default class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {env: 'prod'};
    }

    get method() {
        if (this.props.get) return 'GET';
        if (this.props.post) return 'POST';
        if (this.props.put) return 'PUT';
        throw "Missing HTTP method";
    }

    render() {
        return this.doRender({
            url: this.baseUrl + this.props.url,
            parameters: this.props.parameters || {},
            schema: this.props.schema || {},
            pagination: this.props.pagination,
            requiresLogin: this.props.requiresLogin,
        });
    }

    get baseUrl() {
        const addresses = {
            prod: 'https://api.4programmers.net/v1',
            dev: 'https://api.4programmers.dev/v1',
            local: 'http://localhost:8080/v1',
        };
        return addresses[this.state.env];
    }

    doRender({url, parameters, schema, pagination, requiresLogin}) {
        return (
            <div>
                <Tabs
                    defaultValue="params"
                    values={[
                        {label: 'Params', value: 'params'},
                        {label: 'fetch()', value: 'fetch'},
                        {label: 'curl', value: 'curl'},
                    ]}>
                    <TabItem value="params">
                        <Params
                            method={this.method}
                            url={url}
                            parameters={parameters}
                            schema={schema}
                            pagination={pagination}
                            requiresLogin={requiresLogin}/>
                    </TabItem>
                    <TabItem value="fetch">
                        <Fetch method={this.method} url={url} parameters={Object.assign({}, parameters, schema)}/>
                    </TabItem>
                    <TabItem value="curl">
                        <Curl method={this.method} url={url} parameters={Object.assign({}, parameters, schema)}/>
                    </TabItem>
                </Tabs>
                <div className={styles.wrapper}>
                    <ToggleEnvironment env={this.state.env} onChange={env => this.setState({env})}/>
                </div>
            </div>
        )
    }
}
