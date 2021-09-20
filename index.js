import replace from 'replace-in-file';

export default function searchAndReplace(options = {}) {
    const {
        files = '',
        ignore = '',
        from = '',
        to = '',
        countMatches = false,
        encoding = 'utf-8',
        hook = 'buildEnd',
        verbose = false
    } = options;

    return {
        name: 'search-and-replace',
        [hook]: () => {
            try {
                const results = replace.sync({
                    files: files,
                    ignore: ignore,
                    from: from,
                    to: to,
                    encoding: encoding,
                    countMatches: countMatches
                });

                verbose && console.info('Replacement results:', results);
            } catch (error) {
                console.error('Error occurred:', error);
            }
        }
    };
}
