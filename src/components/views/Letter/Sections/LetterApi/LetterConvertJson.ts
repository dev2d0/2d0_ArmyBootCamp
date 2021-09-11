var fs = require('browserify-fs');

export default function LetterConverJson(user: string, title: string, contents: string) {
    const directory = "../TempLetter/"
    var Data = {
        User: user,
        Title: title,
        Contents: contents
    }
    console.log(user, title, contents, Data)
    const getTitle = (user: string) => {
        const d = new Date();
        const yyyy = d.getFullYear();
        const mm = d.getMonth() + 1;
        const dd = d.getDate();
        const hh = d.getHours();
        const m = d.getMinutes();
        const s = d.getSeconds()
        return `${yyyy}.${mm}.${dd}/${hh}.${m}.${s}.${user}`;
    };

    fs.writeFile('/src/components/views/Letter/Sections/TempLetter/tep.json', JSON.stringify(Data), function (err: any) {
        if (err)
            console.log('파일 쓰기 에러');
    });
}