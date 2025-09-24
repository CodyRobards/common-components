export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@wavelengthusaf/web-components$": "<rootDir>/../web-components/src/index.ts",
    "^@wavelengthusaf/web-components/fonts/(.*)$": "<rootDir>/jest/__mocks__/fileMock.js",
    "^@wavelengthusaf/web-components/(.*)$": "<rootDir>/../web-components/src/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["node_modules"],
  testMatch: ["<rootDir>/jest/**/*.test.ts", "<rootDir>/jest/**/*.test.tsx"],
  setupFilesAfterEnv: ["./jest.setup.js"],
};
