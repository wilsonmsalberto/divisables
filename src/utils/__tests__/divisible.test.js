import { optimalCount, simpleLoopCount, smartLoopCount } from '../divisible';

const rangeCount = {
    name    : 'it should count $expected items divisible by $divisible in a range from $start to $end',
    fixtures: ({ fnToTest, name }) => test.each`
        divisible | start   | end       | expected
        ${3}      | ${1}    | ${9}      | ${3}
        ${2}      | ${0}    | ${10}     | ${6}
        ${1}      | ${1}    | ${10}     | ${10}
        ${1}      | ${1000} | ${100000} | ${99001}
    `(name, ({ divisible, end, expected, start }) => {
        const input = {
            divisible,
            end,
            start,
        };

        expect(fnToTest(input)).toEqual(expected);
    }),
};

const invalidRangeCount = {
    name    : 'it should return 0 when $start is bigger than $end',
    fixtures: ({ fnToTest, name }) => test.each`
        divisible | start | end  | expected
        ${3}      | ${1}  | ${0} | ${0}
        ${2}      | ${2}  | ${1} | ${0}
        ${1}      | ${3}  | ${2} | ${0}
    `(name, ({ divisible, end, expected, start }) => {
        const input = {
            divisible,
            end,
            start,
        };

        expect(fnToTest(input)).toEqual(expected);
    }),
};

describe.each`
    fnName               | fnToTest
    ${'simpleLoopCount'} | ${simpleLoopCount}
    ${'smartLoopCount'}  | ${smartLoopCount}
    ${'optimalCount'}    | ${optimalCount}
`('$fnName', ({ fnToTest }) => {
    [ rangeCount, invalidRangeCount ].forEach(({ fixtures, name }) => fixtures({ name, fnToTest }));
});