const dotenv = require('dotenv');
const thecamp = require('the-camp-lib');
const getContent = require('./getContent');

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

exports.SendNews = async function SendNews() {
    dotenv.config();
    const Unit = await axios.get('http://localhost:3065/getUnit')
        .then(response => {
            if (response.data.success) {
                console.log(response.data)
                return response.data
            } else {
                console.log('유닛 정보를 가져오는 것에 실패하였습니다..')
            }
        })

    const id = process.env.USER2_ID || '';
    const password = process.env.USER2_PWD || '';

    const name = process.env.TRAINEE_NAME || '';
    const birth = process.env.TRAINEE_BIRTH || '';
    const enterDate = process.env.ENTER_DATE || '';
    const className = process.env.CLASS_NAME || '';
    const groupName = process.env.GROUP_NAME || '';
    const unitName = Unit.unitInfo.unit || process.env.UNIT_NAME;

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

    console.log(google)
    console.log(getTitle('구글'))

    function sleep(t) {
        return new Promise(resolve => setTimeout(resolve, t));
    }


    const soldier = new thecamp.Soldier(
        name,
        birth,
        enterDate,
        className,
        groupName,
        unitName,
        thecamp.SoldierRelationship.FRIEND,
    );

    const client = new thecamp.Client();
    await client.login(id, password);
    await client.addSoldier(soldier);

    const [trainee] = await client.fetchSoldiers(soldier);


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


    await client.sendMessage(soldier, googleMessage).then(
        await sleep(5000),
        await client.sendMessage(soldier, economyMessage).then(
            await sleep(5000),
            await client.sendMessage(soldier, cultureMessage).then(
                await sleep(5000),
                await client.sendMessage(soldier, sportsMessage).then(
                    await sleep(5000),
                    await client.sendMessage(soldier, nationalMessage).then(
                        await sleep(5000),
                        await client.sendMessage(soldier, scienceMessage).then(
                            await sleep(5000),
                            await client.sendMessage(soldier, stockMessage).then(
                                await sleep(5000),
                                await client.sendMessage(soldier, estateMessage).then(
                                    await sleep(5000),
                                    await client.sendMessage(soldier, worldMessage).then(
                                        await sleep(5000),
                                        await client.sendMessage(soldier, ecoMessage)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
}
