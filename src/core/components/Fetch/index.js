import React from "react";
import Code from '../Code';
import queryString from "../../queryString";
import {feedAsUriParams} from "../../placeholders";
import indent from "../../indent";

export default function FetchExample({method, url, parameters}) {
    const [urlWithParams, remainingParams] = feedAsUriParams(url, parameters);
    if (method === 'GET') {
        return codeMethodGet(urlWithParams, remainingParams);
    }
    return code(method, urlWithParams, remainingParams);
};

function code(method, url, parameters) {
    return <Code language='js'>
        {`fetch("${url}", {
  "method": "${method}",
  "headers": {
    "Accept": "application/json",
    "Content-type": "application/json"
  },
  "body": JSON.stringify(${indent(JSON.stringify(parameters, null, 2), 2)})
})`}
    </Code>;
}


function codeMethodGet(url, parameters) {
    return <Code language='js'>
        {`fetch("${url + queryString(parameters)}", {
  "method": "GET",
  "headers": {
    "Accept": "application/json",
    "Content-type": "application/json"
  }
})`}
    </Code>;
}
