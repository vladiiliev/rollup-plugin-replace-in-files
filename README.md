# rollup-plugin-search-and-replace
A rollup plugin that searches for and replaces text in one or more files. It works synchronously and makes a single replacement or several replacements at once.

## Install

```shell
npm install --save-dev rollup-plugin-search-and-replace
```
```shell
yarn add -D rollup-plugin-search-and-replace
```

## Usage
```javascript
import searchAndReplace from 'rollup-plugin-search-and-replace';

export default {
    plugins: [
        searchAndReplace()
    ],
}
```
