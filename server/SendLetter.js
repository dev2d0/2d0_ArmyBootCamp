const thecamp = require('the-camp-lib');
const axios = require('axios');

(async () => {

    const getLetters = async (values) => {
        console.log("1")
        await axios.get('http://localhost:3065/getLetters')
        console.log("2")
            .then(response => {
                return response
                console.log(response)
                if (response.data.success) {
                    console.log(response)
                    console.log(response.data)
                    console.log("성공")
                } else {
                    console.log('편지 보내기에 실패햐였습니다.')
                }
            })
        console.log('Success:', values);
    };

    const id = 'ldy2491@naver.com'
    const password = 'lee2491@';

    const name = '';
    const birth = '';
    const enterDate = '';
    const className = '';
    const groupName = '';
    const unitName = '';
    const User = getLetters().user
    const Title = getLetters().title
    const Content = getLetters().content

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

    const message = new thecamp.Message(`${User}님의 편지: ${Title}`, Content, trainee);

    await thecamp.sendMessage(cookies, trainee, message);
})();