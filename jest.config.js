module.exports = {
    collectCoverage    : true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    ],
    coverageThreshold: {
        global: {
            branches  : 80,
            functions : 80,
            lines     : 80,
            statements: 80,
        },
    },
    snapshotSerializers: [ '@emotion/jest/serializer' ],
    moduleNameMapper   : {
        '^@blocks(.*)$'    : [ '<rootDir>/src/ui/blocks/$1' ],
        '^@components(.*)$': [ '<rootDir>/src/ui/components/$1' ],
        '^@context(.*)$'   : [ '<rootDir>/src/context/$1' ],
        '^@theme(.*)$'     : [ '<rootDir>/src/ui/theme/$1' ],
        '^@ui(.*)$'        : [ '<rootDir>/src/ui/$1' ],
        '^@utils(.*)$'     : [ '<rootDir>/src/utils/$1' ],
    },
    moduleFileExtensions    : [ 'ts', 'tsx', 'js', 'jsx' ],
    modulePathIgnorePatterns: [ '<rootDir>/coverage/' ],
    testPathIgnorePatterns  : [ 'dist' ],
    transform               : {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    verbose: true,
};
