const thecamp = require('the-camp-lib');
const axios = require('axios');

function sleep(t){
    return new Promise(resolve=>setTimeout(resolve,t));
}

exports.Send = async function Send() {
    const Letters = await axios.get('http://localhost:5000/getLetters')
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                return response.data
            } else {
                console.log('편지 보내기에 실패햐였습니다.')
            }
        })
    const Unit = await axios.get('http://localhost:5000/getUnit')
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                return response.data
            } else {
                console.log('유닛 정보를 가져오는 것에 실패하였습니다..')
            }
        })
    const id = Unit.unitInfo.id1 || '';
    const password = Unit.unitInfo.pwd1 || '';

    const name = Unit.unitInfo.name || '';
    const birth = Unit.unitInfo.birth || '';
    const enterDate = Unit.unitInfo.enter || '';
    const className = Unit.unitInfo.class || '';
    const groupName = Unit.unitInfo.group || '';
    const unitName = Unit.unitInfo.unit || '';

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
        if (letter.send == false) {
            // console.log("타이틀" + `${letter.user}님의 편지: ${letter.title}`)
            // console.log("컨텐츠" + letter.contents)
            const message = new thecamp.Message(`${letter.user}님의 편지: ${letter.title}`, letter.contents, trainee);
            await thecamp.sendMessage(cookies, trainee, message);
            await axios.post('http://localhost:3065/sendToTrue', {_id: letter._id})
            await sleep(10000)
        }
    })
}
