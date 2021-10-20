const thecamp = require('the-camp-lib');
const {Unit} = require("./models/Unit");
const {Letter} = require("./models/Letter");

function sleep(t){
    return new Promise(resolve=>setTimeout(resolve, t));
}

exports.Send = async function Send() {
    const Letters = await Letter.find({})
    const PersonalInfo = await Unit.findOne({})

    const id = PersonalInfo.id1 || '';
    const password = PersonalInfo.pwd1 || '';

    const name = PersonalInfo.name || '';
    const birth = PersonalInfo.birth || '';
    const enterDate = PersonalInfo.enter || '';
    const className = PersonalInfo.class || '';
    const groupName = PersonalInfo.group || '';
    const unitName = PersonalInfo.unit || '';

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

    Letters.map(async letter => {
        if (letter.send == false) {
            const message = new thecamp.Message(`${letter.user}님의 편지: ${letter.title}`, letter.contents, trainee);
            await thecamp.sendMessage(cookies, trainee, message);

            await Letter.findOneAndUpdate({ _id: letter._id }, { send: true })
            await sleep(10000)
        }
    })
}
