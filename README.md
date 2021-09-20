# rollup-plugin-search-and-replace

A rollup plugin that searches for and replaces text in one or more files. It works synchronously and makes a single replacement or several replacements at once.

The plugin uses a [replace-in-file](https://www.npmjs.com/package/replace-in-file) engine for replacements, so you can use all the available options from there.

## Install

```console
npm install --save-dev rollup-plugin-search-and-replace
```

```console
yarn add -D rollup-plugin-search-and-replace
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```javascript
import searchAndReplace from 'rollup-plugin-search-and-replace';

export default {
    plugins: [
        searchAndReplace({
            entry: {
                files: 'path/to/file',
                from: /foo/g,
                to: 'bar'
            },
            hook: 'closeBundle'
        })
    ]
};
```

## Options

In addition to the properties and values specified for replacement, users may also specify the options below.

### `entry`

Here you can use all available options from [replace-in-file](https://www.npmjs.com/package/replace-in-file#basic-usage). 
Note that the current version of the plugin only works in synchronous mode, so you will not be able to use the asynchronous mode of replace-in-file.

### `hook`

Rollup hook the plugin should use. Default is `closeBundle`. A list of all available hooks can be found [here](https://github.com/rollup/rollup/blob/master/docs/05-plugin-development.md#build-hooks).
