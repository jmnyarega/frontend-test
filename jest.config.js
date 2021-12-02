module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  globals: {
    "ts-jest": {
      usebabelrc: true,
      tsconfigFile: "jest.tsconfig.json",
    },
  },
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
};
