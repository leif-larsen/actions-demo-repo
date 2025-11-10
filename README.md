# actions-demo-repo
Small repo to show functionality of GitHub Actions

## Description

This is a Node.js calculator application with comprehensive testing. It demonstrates basic arithmetic operations and is designed to work with multiple Node.js versions, making it ideal for showcasing GitHub Actions features like matrix builds.

## Features

The calculator includes the following operations:
- **add**: Addition of two numbers
- **subtract**: Subtraction of two numbers
- **multiply**: Multiplication of two numbers
- **divide**: Division with zero-check error handling
- **power**: Exponentiation
- **sqrt**: Square root with negative number error handling
- **modulo**: Modulo operation with zero-check error handling
- **abs**: Absolute value

## Prerequisites

- Node.js (v14.x, v16.x, v18.x, v20.x or later)
- npm (comes with Node.js)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/leif-larsen/actions-demo-repo.git
   cd actions-demo-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the calculator demo:

```bash
npm start
```

This will execute the `index.js` file which demonstrates all calculator operations.

## Running Tests

The project uses Jest for testing. To run tests:

```bash
npm test
```

### Other Test Commands

- **Watch mode** (automatically re-runs tests on file changes):
  ```bash
  npm run test:watch
  ```

- **Coverage report**:
  ```bash
  npm run test:coverage
  ```

## Project Structure

```
.
├── calculator.js       # Calculator module with all operations
├── calculator.test.js  # Comprehensive test suite
├── index.js           # Demo application
├── package.json       # Project configuration and dependencies
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Compatibility

This application is designed to be compatible with multiple Node.js versions, making it suitable for testing matrix builds in CI/CD pipelines like GitHub Actions.

Tested with:
- Node.js 14.x
- Node.js 16.x
- Node.js 18.x
- Node.js 20.x

## License

See LICENSE file for details.
