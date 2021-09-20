# rollup-plugin-replace-in-files
A rollup plugin which replace text in one or more files or globs. Works synchronously or asynchronously with either promises or callbacks. Make a single replacement or multiple replacements at once.

## Install

```shell
npm install --save-dev rollup-plugin-replace-in-files
```
```shell
yarn add -D rollup-plugin-replace-in-files
```

## Usage
```javascript
import replace from 'rollup-plugin-replace-in-files';

export default {
    plugins: [
        replace()
    ],
}
```
