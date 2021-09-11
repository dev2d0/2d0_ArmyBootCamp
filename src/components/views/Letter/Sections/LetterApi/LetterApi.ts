import data from '../../../../../assets/data/data.json'
const thecamp = require('the-camp-lib');
const dotenv = require('dotenv');

async function LetterApi(user: string, title: string, contents: string) {
    dotenv.config();

    const id = data.client.id || '';
    const password = data.client.password || '';

    const name = data.soldierInfo.name || '';
    const birth = data.soldierInfo.birth || '';
    const enterDate = data.soldierInfo.enterDate || '';
    const className = data.soldierInfo.className || '';
    const groupName = data.soldierInfo.groupName || '';
    const unitName = data.soldierInfo.unitName || '';

    const getTitle = (user: string, title: string) => {
        return `${user}이/가 보내는 편지 : ${title}`;
    };

    const soldier = new thecamp.Soldier(
        name,
        birth,
        enterDate,
        className,
        groupName,
        unitName,
        thecamp.SoldierRelationship.FRIEND,
    );

    console.log(id, password, name, birth, enterDate, className, groupName, unitName, soldier)

    const client = new thecamp.Client();
    await client.login(id, password);
    await client.addSoldier(soldier);

    const [trainee] = await client.fetchSoldiers(soldier);
    const message = new thecamp.Message(getTitle(user, title), contents, trainee);

    await client.sendMessage(soldier, message);

}

export default LetterApi;