import {suite, test} from 'mocha';
import assert from 'assert';

import {feedAsUriParams, match} from "../../src/core/placeholders";

suite('placeholders', () => {
    suite('match()', () => {
        test('should replace params in uri', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs/:id/:user';
            const allParams = {cat: 'dog', id: 4, user: 'admin', foo: 'bar'};

            // given
            const [result, params, uriParams] = feedAsUriParams(url, allParams);

            // then
            assert.equal(result, 'https://api.4programmers.net/v1/microblogs/4/admin');
        });

        test('should remove params', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs/:id/:user';
            const allParams = {cat: 'dog', id: 4, user: 'admin', foo: 'bar'};

            // given
            const [result, params, uriParams] = feedAsUriParams(url, allParams);

            // then
            assert.deepEqual(params, {cat: 'dog', foo: 'bar'});
        });

        test('should return replaced params', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs/:id/:user';
            const allParams = {cat: 'dog', id: 4, user: 'admin', foo: 'bar'};

            // given
            const [result, params, uriParams] = feedAsUriParams(url, allParams);

            // then
            assert.deepEqual(uriParams, ['id', 'user']);
        });

        test('should ignore', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs';

            // given
            const [result, params, uriParams] = feedAsUriParams(url, {foo: 'bar'});

            // then
            assert.equal(result, url);
            assert.deepEqual(params, {foo: 'bar'});
            assert.deepEqual(uriParams, []);
        });

        test('should not modify original object', () => {
            // given
            let params = {foo: 'bar'};

            // given
            feedAsUriParams(':foo', params);

            // then
            assert.deepEqual(params, {foo: 'bar'});
        });

        test('should ignore numbers', () => {
            // given
            const url = 'localhost:8080 and :12ab';

            // given
            const [result] = feedAsUriParams(url, {});

            // then
            assert.equal(result, url);
        });
    });
    suite('match()', () => {
        test('should find placeholders', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs/:id/:user';

            // when
            const result = match(url);

            // then
            assert.deepEqual(result, ['id', 'user']);
        });

        test('should not find placeholders', () => {
            // given
            const url = 'https://api.4programmers.net/v1/microblogs';

            // when
            const result = match(url);

            // then
            assert.deepEqual(result, []);
        });

        test('should ignore numbers', () => {
            // given
            const url = 'localhost:8080 and :12ab';

            // given
            const result = match(url, {});

            // then
            assert.deepEqual(result, []);
        });
    });
});
