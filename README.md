# react-es6-demo

Showcasing how to use React with ECMAScript 2015. Can be used as a starting point for a React app.

An associated blog post can be found [here](http://www.jayway.com/2015/03/04/using-react-with-ecmascript-6/), though it is severely outdated compared to this repository.

The gist of it is this:

* Using [webpack](http://webpack.github.io/), traverse the dependency tree.
* With the help of [babel](https://babeljs.io/), transpile any occurences of ECMAScript 2015 syntax.
* Output the result to the `build` directory and serve it.

## Usage

```zsh
npm install
npm start
```

Navigate to [http://localhost:8080/](http://localhost:8080/).
