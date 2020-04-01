import {suite, test} from 'mocha';
import assert from 'assert';

import indent from "../../src/core/indent";

suite('indent', () => {
    suite('indent()', () => {
        test('should indent empty', () => {
            // then
            assert.equal(indent('', 0), '');
        });

        test('should indent', () => {
            // given
            let string = `First
Second
Third`;

            // when
            const actual = indent(string, 4);

            // then
            assert.equal(actual, `First
    Second
    Third`);
        });
    });
});
