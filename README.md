# express-react-boilerplate

## Quick start

1. Clone this repo using:
  ```shell
  $ git clone git@github.com:CodingDaria/express-react-boilerplate.git
  ```

2. To install dependencies run:

  ```shell
  $ yarn install
  ```

  *We recommend using `yarn` for installing packages, but you can use `npm` instead*:

  ```shell
  $ npm install
  ```
3. Run project in Dev mode

  ```shell
  $ yarn run dev
  ```
  Creates the development build and starts the development server running on `http://localhost:8087` using the webpack.dev.config.js with Hot Module Replacement (HMR) (Changes in the application code will be hot-reloaded)

  ## Features

* Modern ES6
* SASS/SCSS
* TailwindCSS
* Redux
* React Router

## Project Structure

#### `src/`

You will write your React app in this folder.

#### `src/components`

This folder contains all your React components.

#### `dist`
This directory contains compiled project files

#### `webpack.dev.config.js` `and webpack.prod.config.js`
Project environment configs. Webpack uses proper config depending on defined application environment.
By default `webpack.dev.config.js` is used.


## Command Line Commands

#### Developing

```Shell
yarn run watch:server
```
Starts the development server running on `http://localhost:8080`.

```Shell
yarn run watch:client
```
Runs the client side of the application on `http://localhost:8087`.


#### Building

```Shell
yarn buildDev
```

Creates the development build, piping files to the `dist` folder.


```Shell
yarn buildProd
```

Prepares your app for deployment to production environment (using the webpack.prod.config.js) (does not run tests). Optimizes and minifies all files, piping them to the `dist` folder.


#### Testing

```Shell
yarn run test
```

Tests your application modern JavaScript Testing Framework - Jest with the unit tests.


```Shell
yarn run coverage
```

Generates test coverage.

