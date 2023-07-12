const names = [
    { lastName: 'OKOLI', firstName: 'UZOCHUKWU', regNo: '2018364001' },
    { lastName: 'NDUKWU', firstName: 'AUGUSTINE', regNo: '2018364002' },
    { lastName: 'IGWE', firstName: 'UGOCHUKWU', regNo: '2018364003' },
    { lastName: 'ILODIBE', firstName: 'CHIBUEZE', regNo: '2018364004' },
    { lastName: 'OKERE', firstName: 'OGENNA', regNo: '2018364005' },
    { lastName: 'NWOGBO', firstName: 'CHIBUIKE', regNo: '2018364006' },
    { lastName: 'AKPULU', firstName: 'KELVIN', regNo: '2018364007' },
    { lastName: 'OGOGOR', firstName: 'AKACHUKWU', regNo: '2018364008' },
    { lastName: 'MONEKE', firstName: 'STANLEY', regNo: '2018364009' },
    {
        lastName: 'CLEMENT',
        firstName: 'KOSISOCHUKWU',
        regNo: '2018364010'
    },
    {
        lastName: 'IHEAMARAME',
        firstName: 'EMMANUEL',
        regNo: '2018364011'
    },
    { lastName: 'ONYEAGBA', firstName: 'CHINENYE', regNo: '2018364012' },
    { lastName: 'OJI', firstName: 'CHINEDU', regNo: '2018364013' },
    { lastName: 'ANAGU', firstName: 'JOEL', regNo: '2018364014' },
    { lastName: 'OKEKE', firstName: 'CHUKWUEMEKA', regNo: '2018364015' },
    { lastName: 'ONUBI', firstName: 'OLUCHUKWU', regNo: '2018364016' },
    { lastName: 'MUOLOKWU', firstName: 'JAMES', regNo: '2018364017' },
    {
        lastName: 'CHUKA-MANYIKE',
        firstName: 'SANDRA',
        regNo: '2018364018'
    },
    { lastName: 'ANIAKOR', firstName: 'CHRISTIAN', regNo: '2018364019' },
    { lastName: 'EKWUEME', firstName: 'NELSON', regNo: '2018364020' },
    { lastName: 'EZEABASILI', firstName: 'UGONNA', regNo: '2018364021' },
    { lastName: 'BEKEE', firstName: 'OGONNA', regNo: '2018364022' },
    { lastName: 'OKENWA', firstName: 'NNAEMEKA', regNo: '2018364023' },
    { lastName: 'OKWAMANWUNA', firstName: 'CHIDI', regNo: '2018364024' },
    { lastName: 'UMEH', firstName: 'ANTHONY', regNo: '2018364025' },
    { lastName: 'LAMJA', firstName: 'VICTOR', regNo: '2018364026' },
    { lastName: 'MADUABUCHI', firstName: 'EKENE', regNo: '2018364027' },
    { lastName: 'IBE', firstName: 'JULIAN', regNo: '2018364028' },
    { lastName: 'UWOM', firstName: 'BOMEMUGH', regNo: '2018364029' },
    { lastName: 'EMMANUEL', firstName: 'NEHEMIAH', regNo: '2018364030' },
    { lastName: 'NEBO', firstName: 'MIRACLE', regNo: '2018364031' },
    { lastName: 'EZEKWEM', firstName: 'CHRISTIAN', regNo: '2018364032' },
    { lastName: 'OKEKE', firstName: 'MARYCLARE', regNo: '2018364033' },
    {
        lastName: 'OBIEGBULEM',
        firstName: 'CHIBUOKEM',
        regNo: '2018364034'
    },
    { lastName: 'OKOLOCHA', firstName: 'CHIZOBA', regNo: '2018364035' },
    { lastName: 'OKAFOR', firstName: 'VICTOR', regNo: '2018364036' },
    { lastName: 'ONYEKA', firstName: 'SOSTHENES', regNo: '2018364037' },
    { lastName: 'EMMANUEL', firstName: 'STANLEY', regNo: '2018364038' },
    {
        lastName: 'NVENE',
        firstName: 'ONYINYECHUKWU',
        regNo: '2018364039'
    },
    { lastName: 'DAVID', firstName: 'OBICHI', regNo: '2018364041' },
    { lastName: 'NDUKWE', firstName: 'EMMANUEL', regNo: '2018364042' },
    { lastName: 'DURUAKU', firstName: 'CHINEDU', regNo: '2018364043' },
    { lastName: 'OGENE', firstName: 'OSITA', regNo: '2018364044' },
    { lastName: 'OKAFOR', firstName: 'PATRICK', regNo: '2018364045' },
    { lastName: 'PAUL', firstName: 'CHUKWUEMEKA', regNo: '2018364046' },
    { lastName: 'KALU', firstName: 'MARK', regNo: '2018364048' },
    {
        lastName: 'ONISUBIOYIN',
        firstName: 'AYOBAMI',
        regNo: '2018364049'
    },
    { lastName: 'UNIGWE', firstName: 'SIXTUS', regNo: '2018364050' },
    { lastName: 'ILORI', firstName: 'AYOBAMI', regNo: '2018364051' },
    { lastName: 'OZOEMENA', firstName: 'VICTOR', regNo: '2018364052' },
    { lastName: 'OKOLI', firstName: 'CHIAZA', regNo: '2018364053' },
    { lastName: 'UDEH', firstName: 'EMMANUEL', regNo: '2018364054' },
    {
        lastName: 'IFEABUNIKE',
        firstName: 'CHIEMEKA',
        regNo: '2018364055'
    },
    { lastName: 'NJIKE', firstName: 'BELUCHUKWU', regNo: '2018364056' },
    { lastName: 'ADONU', firstName: 'EMMANUEL', regNo: '2018364057' },
    { lastName: 'NWORA', firstName: 'CHIDUBEM', regNo: '2018364058' },
    { lastName: 'CHIBUEZE', firstName: 'THANKGOD', regNo: '2018364059' },
    { lastName: 'OBI', firstName: 'CHIDERA', regNo: '2018364060' },
    { lastName: 'UDECHUKWU', firstName: 'DANIEL', regNo: '2018364061' },
    { lastName: 'ILOKA', firstName: 'CYNTHIA', regNo: '2018364062' },
    { lastName: 'ONUGU', firstName: 'TOBENNA', regNo: '2018364063' },
    { lastName: 'NWOKEABIA', firstName: 'DAVID', regNo: '2018364064' },
    { lastName: 'OKOYE', firstName: 'CHRISTIAN', regNo: '2018364065' },
    { lastName: 'OKEKE', firstName: 'GABRIEL', regNo: '2018364066' },
    { lastName: 'OKOYE', firstName: 'CHIOMA', regNo: '2018364067' },
    {
        lastName: 'OFFODILI',
        firstName: 'SOMTOCHUKWU',
        regNo: '2018364069'
    },
    { lastName: 'MADUAGWU', firstName: 'CHIAMAKA', regNo: '2018364070' },
    { lastName: 'ADIMIKE', firstName: 'STANLEY', regNo: '2018364071' },
    {
        lastName: 'ONYEKAONWU',
        firstName: 'MUNACHIMSO',
        regNo: '2018364072'
    },
    { lastName: 'IKWUAGWU', firstName: 'EZEKIEL', regNo: '2018364073' },
    { lastName: 'OKAKA', firstName: 'MICAH', regNo: '2018364074' },
    { lastName: 'NWAISAAC', firstName: 'JOSEPH', regNo: '2018364075' },
    { lastName: 'OME', firstName: 'JESSE', regNo: '2018364076' },
    { lastName: 'PAUL', firstName: 'UGOCHUKWU', regNo: 'I.' },
    { lastName: 'EMERUWA', firstName: 'MICHAEL', regNo: '2018364079' },
    { lastName: 'NWORIE', firstName: 'OBINNA', regNo: '2018364080' },
    { lastName: 'NNEBEDUM', firstName: 'OSCAR', regNo: '2018364081' },
    { lastName: 'NWONU', firstName: 'IFEANACHO', regNo: '2018364082' },
    { lastName: 'NKAMUO', firstName: 'CALISTUS', regNo: '2018364083' },
    { lastName: 'IJERI', firstName: 'KENNEDY', regNo: '2018364085' },
    { lastName: 'OKOH', firstName: 'DAVID', regNo: '2018364086' },
    { lastName: 'ORAGUI', firstName: 'ONYEKACHI', regNo: '2018364087' },
    { lastName: 'OKWUMUO', firstName: 'FRANCIS', regNo: '2018364089' },
    { lastName: 'MUOTO', firstName: 'JUSTIN', regNo: '2018364090' },
    { lastName: 'NWUKO', firstName: 'ONYEDIKACHI', regNo: '2018364091' },
    { lastName: 'ONATE', firstName: 'KIZITO', regNo: '2018364094' },
    { lastName: 'OGIDI', firstName: 'IFECHUKWU', regNo: '2019364027' },
    { lastName: 'OBI', firstName: 'CHUKWUEBUKA', regNo: '2019364035' },
    { lastName: 'UGWUOKE', firstName: 'PASCHAL', regNo: '2019364073' },
    { lastName: 'MUSTAPHA', firstName: 'SHERIFF', regNo: '2019364089' },
    { lastName: 'CHUKWUMA', firstName: 'UGOCHUKWU', regNo: '2018534037' },
    { lastName: 'UYALA', firstName: 'EMMANUEL', regNo: '2018534030' },
    { lastName: 'AMAKON', firstName: 'MIRACLE', regNo: '2018364099' },
    { lastName: 'EZEOFOR', firstName: 'PAUL', regNo: '2018364084' },
    { lastName: 'OBIJIAKU', firstName: 'AUGUSTINE', regNo: '2018584077' },
    { lastName: 'ONYEAGUSI', firstName: 'KYRIAN', regNo: '2017364086' },
    { lastName: 'SIMON', firstName: 'ILILE', regNo: '2016364066' },
    { lastName: 'OJIAKOR', firstName: 'MICHAEL', regNo: '2018234001' }
]

const firstNames = []
const lastNames = []
const regNos = []

for (i = 0; i < names.length; i++) {
    firstNames.push(names[i].firstName)
    lastNames.push(names[i].lastName)
    regNos.push(names[i].regNo)
}

console.log(`Firstnames: ${firstNames}`)
console.log(`Lastnames: ${lastNames}`)
console.log(`RegNos: ${regNos}`)