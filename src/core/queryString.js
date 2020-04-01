export default function queryString(obj) {
    const result = Object.entries(obj).map(([key, value]) =>
        encodeURIComponent(key) + "=" +
        encodeURIComponent(value));
    if (result.length) {
        return '?' + result.join("&");
    }
    return '';
}
