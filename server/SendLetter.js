const thecamp = require('the-camp-lib');
const axios = require('axios');
const dotenv = require('dotenv');

function sleep(t){
    return new Promise(resolve=>setTimeout(resolve,t));
}

(async () => {
    dotenv.config();
    const Letters = await axios.get('http://localhost:3065/getLetters')
        .then(response => {
            if (response.data.success) {
                return response.data
            } else {
                console.log('편지 보내기에 실패햐였습니다.')
            }
        })

    const id = process.env.USER_ID || '';
    const password = process.env.USER_PWD || '';

    const name = process.env.TRAINEE_NAME || '';
    const birth = process.env.TRAINEE_BIRTH || '';
    const enterDate = process.env.ENTER_DATE || '';
    const className = process.env.CLASS_NAME || '';
    const groupName = process.env.GROUP_NAME || '';
    const unitName = process.env.UNIT_NAME || '';

    const soldier = new thecamp.Soldier(
        name,
        birth,
        enterDate,
        className,
        groupName,
        unitName,
        thecamp.SoldierRelationship.FRIEND,
    );
    const cookies = await thecamp.login(id, password);
    await thecamp.addSoldier(cookies, soldier);
    const [trainee] = await thecamp.fetchSoldiers(cookies, soldier);

    Letters.letterInfo.map(async letter => {
        if(letter.send == false) {
            // console.log("타이틀" + `${letter.user}님의 편지: ${letter.title}`)
            // console.log("컨텐츠" + letter.contents)
            const message = new thecamp.Message(`${letter.user}님의 편지: ${letter.title}`, letter.contents, trainee);
            await thecamp.sendMessage(cookies, trainee, message);
            await axios.post('http://localhost:3065/sendToTrue', { _id: letter._id})
            await sleep(10000)
        }
    })

})();