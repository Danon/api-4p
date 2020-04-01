import {suite, test} from 'mocha';
import assert from 'assert';

import queryString from "../../src/core/queryString";

suite('queryString()', function () {
    test('should return empty string', () => {
        // when
        const actual = queryString({});

        // then
        assert.equal(actual, '');
    });
    test('should return values', () => {
        // when
        const actual = queryString({
            key: "value",
            foo: "bar"
        });

        // then
        assert.equal(actual, '?key=value&foo=bar');
    });
    test('should encode values', () => {
        // when
        const actual = queryString({
            "foo bar": "lorem ipsum",
        });

        // then
        assert.equal(actual, '?foo%20bar=lorem%20ipsum');
    });
});
