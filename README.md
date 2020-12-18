# The Divisible Counter App

[Website](https://)

## Software

This app is brought to you by all of these lovely software projects:

### Frameworks & Bundlers

- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)

### Styling

- [Emotion](https://emotion.sh)

### Testing & Code Quality

- [ESLint](https://eslint.org/)
- [StyleLint](https://stylelint.io/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)

### Others

- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com)

## Requirements

The usage of this app requires the following software to be installed in your machine.

Each software has its own dependencies, please follow the installation instructions as best as you
can.

### Recommended software versions

Tested and working on Mac OSX 11.1 (Big Sur):

| Software                        | Version  |
| ------------------------------- | -------- |
| [Yarn.js](https://yarnpkg.com/) | 1.22.10 + |

**You can install yarn from npm with `npm install -g yarn` but make sure to follow the website's
instructions**

## Setup project

Clone the project to your folder of choice

```bash
git@github.com:wilsonmsalberto/divisables.git
```

Run the following lines in your terminal **while inside the project folder** in order to get/install
all the package dependencies:

```bash
yarn
```

## Run project in development

**Start the client**

```bash
yarn start
```

This will run your project in development mode and it will be running in
[http://localhost:3000](http://localhost:3000)

Any changes you make will automatically build and refresh the page thus reflecting your changes.

## Run tests for the application

```bash
yarn test
```

This will run the tests that are currently written for your application

If you wish to change/develop the tests and have them update dynamically you should run

```bash
yarn test:watch
```

### Developer Log

#### Developments

- Added a personal set of UI components
- Tested main utilities and UI components
- Use of React Context for a Themable solution
- Use of theming with Styled Components (Emotionjs) to easily switch themes if needed
- Creation of small components that are reusable
- Creation of block components that aggregate some logic
- Some accessiblity and semantic concerns were applied
- Use of ESLint, StyleLint and EditorConfig to have a consistent set of code standards

#### Improvements

- Dark mode should be more visually balanced
- Coverage should reach threshold
- Main interface component should be better tested
- Could have deployed in a free service such as Netlify
