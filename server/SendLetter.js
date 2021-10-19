const thecamp = require('the-camp-lib');
const {Unit} = require("./models/Unit");
const {Letter} = require("./models/Letter");

function sleep(t){
    return new Promise(resolve=>setTimeout(resolve, t));
}

exports.Send = async function Send() {
    const Letters = await Letter.find({})
    console.log("편지 받아내기"+Letters)
    const PersonalInfo = await Unit.findOne({})
    console.log("받아내기"+PersonalInfo)
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
    /*
    const cookies = await thecamp.login(id, password);
    await thecamp.addSoldier(cookies, soldier);
    const [trainee] = await thecamp.fetchSoldiers(cookies, soldier);

     */
    Letters.map(async letter => {
        if (letter.send == false) {
             console.log("타이틀" + `${letter.user}님의 편지: ${letter.title}`)
             console.log("컨텐츠" + letter.contents)
            /*
            const message = new thecamp.Message(`${letter.user}님의 편지: ${letter.title}`, letter.contents, trainee);
            await thecamp.sendMessage(cookies, trainee, message);

             */
            await Letter.findOneAndUpdate({ _id: letter._id }, { send: true })
            await sleep(10000)
        }
    })
}
