import React from "react";
import Code from '../Code';
import queryString from "../../queryString";
import {feedAsUriParams} from "../../placeholders";

export default class extends React.Component {
    render() {
        let {method, url, parameters} = this.props;
        const [urlWithParams, remainingParams] = feedAsUriParams(url, parameters);
        if (method === 'GET') {
            return this.codeMethodGet(urlWithParams, remainingParams);
        }
        return this.code(method, urlWithParams, remainingParams);
    }

    code(method, url, parameters) {
        return (
            <Code language='bash'>
                {`curl -X ${method} ${url} \\
      -H "Accept: application/json" \\
      -H "Content-Type: application/json" \\
      -d '${JSON.stringify(parameters)}'`}
            </Code>
        );
    }

    codeMethodGet(url, parameters) {
        return (
            <Code language='bash'>
                {`curl -X GET ${url + queryString(parameters)} \\
      -H "Accept: application/json" \\
      -H "Content-Type: application/json"`}
            </Code>
        );
    }
};
