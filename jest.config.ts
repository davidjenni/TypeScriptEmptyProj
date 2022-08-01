import type { Config } from '@jest/types';

// https://jestjs.io/docs/configuration
const config: Config.InitialOptions = {
  collectCoverageFrom: [ "./src/**", "!**/test-data/**" ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [ "/node_modules", "/dist" ],
  verbose: true,
  // automock: true,
};
export default config;
