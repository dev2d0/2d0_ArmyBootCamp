const Parser = require('rss-parser');
const parser = new Parser();
const rssNewsAddress = require('./assets/rssNewsAddress.json');
const template = `[{@title}]
{@content}`;
const MAX_LENGTH = 1490; // MAX 1500

module.exports = async function (theme) {

    let contents = [];

    if (theme in rssNewsAddress) {
        const feed = await parser.parseURL(rssNewsAddress[theme])
        const feedContentList = feed.items.map(({ title, content }) => {
            const newContent = content.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/gi, '');
            const parsedContent = template
                .replace('{@title}', title)
                .replace('{@content}', newContent);
            return parsedContent;
        });
        contents = [...contents, ...feedContentList];
    }

    return (
        contents
            .sort(() => Math.random() - 0.5)
            .join('\n')
            .substr(0, MAX_LENGTH) + '...'
    );
};