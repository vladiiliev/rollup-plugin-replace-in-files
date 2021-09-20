import replace from 'replace-in-file';

export default function searchAndReplace(options = {}) {
    const {
        entry = {
            files: '',
            from: '',
            to: ''
        },
        hook = 'closeBundle'
    } = options;

    return {
        name: 'search-and-replace',
        [hook]: () => {
            try {
                const results = replace.sync(entry);

                entry['verbose'] && console.info('Replacement results:', results);
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    };
}
