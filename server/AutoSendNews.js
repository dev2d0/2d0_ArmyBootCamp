const thecamp = require('the-camp-lib');
const getContent = require('./getContent');
const {Unit} = require("./models/Unit");

const getTitle = (title) => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = d.getMonth() + 1;
    const dd = d.getDate();

    const titles = [
        `잘 지내냐 ${yyyy}.${mm}.${dd}일 ${title} News 보낸다`,
        `${yyyy}.${mm}.${dd}일 ${title} 뉴스다`,
        `나다 ${yyyy}.${mm}.${dd}일자 ${title} 기사다`,
        `훈련소냐 ${yyyy}.${mm}.${dd}일 ${title} News다`,
        `언제 나오냐 ${title} 기사 보낸다`,
        `${yyyy}.${mm}.${dd}일자 ${title} News 보낸다`,
        `심심할 때 읽으라고 ${yyyy}.${mm}.${dd}일자 ${title} News 보낸다`,
        `훈련병아 ${yyyy}.${mm}.${dd}일자 ${title} News 보낸다`,
        `ㅎㅇㅎㅇ ${yyyy}.${mm}.${dd}일자 ${title} 뉴스들이다`,
        `여기는 ${yyyy}.${mm}.${dd}일이다 ${title} News 보낸다`,
        `${title} News`,
        `${yyyy}.${mm}.${dd}일자 ${title} 뉴스 모음`,
        `${yyyy}.${mm}.${dd}일 ${title} News 모음`,
        `${mm}월${dd}일 ${title} 기사다`,
        `${mm}.${dd}일 ${title} News다`,
        `${mm}월${dd}일 ${title} 뉴스다`,
    ];

    return titles[Math.floor(Math.random() * titles.length)];
};

function sleep(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

exports.SendNews = async function SendNews() {
    const PersonalInfo = await Unit.findOne({})

    const id = PersonalInfo.id1 || '';
    const password = PersonalInfo.pwd1 || '';

    const name = PersonalInfo.name || '';
    const birth = PersonalInfo.birth || '';
    const enterDate = PersonalInfo.enter || '';
    const className = PersonalInfo.class || '';
    const groupName = PersonalInfo.group || '';
    const unitName = PersonalInfo.unit || '';

    const google = await getContent('google');
    const economy = await getContent('economy');
    const culture = await getContent('culture');
    const sports = await getContent('sports');
    const national = await getContent('national');
    const science = await getContent('science');
    const stock = await getContent('stock');
    const estate = await getContent('estate');
    const world = await getContent('world');
    const eco = await getContent('eco');

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

    const googleMessage = new thecamp.Message(getTitle('구글'), google, trainee);
    const economyMessage = new thecamp.Message(getTitle('경제'), economy, trainee);
    const cultureMessage = new thecamp.Message(getTitle('문화'), culture, trainee);
    const sportsMessage = new thecamp.Message(getTitle('스포츠'), sports, trainee);
    const nationalMessage = new thecamp.Message(getTitle('국가'), national, trainee);
    const scienceMessage = new thecamp.Message(getTitle('과학'), science, trainee);
    const stockMessage = new thecamp.Message(getTitle('주식'), stock, trainee);
    const estateMessage = new thecamp.Message(getTitle('부동산'), estate, trainee);
    const worldMessage = new thecamp.Message(getTitle('세계'), world, trainee);
    const ecoMessage = new thecamp.Message(getTitle('환경'), eco, trainee);

    await thecamp.sendMessage(cookies, trainee, googleMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, economyMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, cultureMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, sportsMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, nationalMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, scienceMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, stockMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, estateMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, worldMessage);
    await sleep(5000);
    await thecamp.sendMessage(cookies, trainee, ecoMessage);
}
