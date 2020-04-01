import {suite, test} from 'mocha';
import assert from 'assert';

import any from "../../src/core/utils";

suite('utils', () => {
    suite('any()', () => {
        test('should not have any()', () => {
            // when
            const actual = any({});

            // then
            assert.equal(actual, false);
        });
        test('should have any()', () => {
            // when
            const actual = any({
                key: "value",
                foo: "bar"
            });

            // then
            assert.equal(actual, true);
        });
    });
});
