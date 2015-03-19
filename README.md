# React with ECMAScript 6

Showcasing how to use React with ECMAScript 6.

## Usage

```zsh
npm install
npm run build
```

Optionally, to run from a web server:

```zsh
npm install -g live-server
live-server
```

An associated blog post can be found [here](http://www.jayway.com/2015/03/04/using-react-with-ecmascript-6/).

The gist of it is this:

* Using [browserify](http://browserify.org/), traverse the dependency tree.
* With the help of [babelify](https://github.com/babel/babelify), transpile any occurences of ECMAScript 6 syntax.
* Output the result to `dist/bundle.js`.

