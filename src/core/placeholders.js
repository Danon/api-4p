export function feedAsUriParams(url, params) {
    params = Object.assign({}, params);
    const uriParams = [];
    url = url.replace(/:([a-z]+)/g, (whole, group) => {
        if (group in params) {
            let param = params[group];
            uriParams.push(group);
            delete params[group];
            return param;
        }
        throw new Error(`Missing replacement for '${group}'`);
    });
    return [url, params, uriParams];
}

export function match(url) {
    return matchAll(/:([a-z]+)/g, url);
}

function matchAll(regexp, string) {
    const results = [];
    for (let result of string.matchAll(regexp)) {
        results.push(result[1]);
    }
    return results;
}
