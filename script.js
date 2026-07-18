const translations = {
    ru: {
        appTitle: "Ассистент Здоровья", walletTitle: "Мой Кошелек",
        welcome: "👵 Здравствуйте! Я ваш личный медицинский помощник. Нажмите большую красную кнопку внизу и продиктуйте ваш вопрос голосом.",
        micSub: "Нажмите и говорите", ocrTitle: "📷 Понять анализы или рецепт",
        ocrDesc: "Сфотографируйте бумажный бланк из поликлиники, и я переведу его на простой язык.",
        ocrBtn: "Сфотографировать бланк", balTitle: "Ваш баланс безопасных баллов:",
        balDesc: "1 балл = 1 единица валюты. Эти баллы не видны социальным службам и защищают ваши субсидии от пересчета!",
        simTitle: "🎁 Симулятор сарафанного радио:",
        simDesc: "Нажимайте кнопки, чтобы проверить, как растет сеть и увеличивается ваш доход:",
        simB1: "+1 подруга купила подписку (Линия 1)", simB2: "Подруга пригласила знакомую (Линия 2)",
        statTitle: "📊 Ваша сеть и доходы", statL1: "Приглашено вами (Линия 1):",
        statL2: "Приглашено ими (Линия 2):", statInc: "Ваш пассивный доход в месяц:",
        btnShare: "📢 Поделиться с подругой в WhatsApp", btnSpend: "🛒 Оплатить ЖКХ / Телефон баллами",
        navP1: "Помощник", navP2: "Кошелек",
        userQ: "🎤 <i>Вы говорите:</i> «У меня покалывает в колене после ходьбы, что делать?»",
        botA: "🤖 <b>Ответ ассистента:</b> Покалывание может быть вызвано нагрузкой на сустав. Присядьте, отдохните и приложите прохладный компресс на 10 минут. Если боль усилится, обязательно обратитесь к врачу.",
        ocrUser: "📷 <i>Загружено фото бланка анализов...</i>",
        ocrBot: "🔬 <b>Разбор анализа крови:</b><br>• Гемоглобин: 135 (В норме).<br>• Холестерин: 6.2 (Повышен). Ограничьте жирные продукты и проконсультируйтесь с терапевтом.",
        shareText: "Привет! Нашла отличного голосового помощника по здоровью. Он мне перевел анализы и напоминает пить лекарства. Скачай и введи мой номер телефона при входе!",
        alertNoPoints: "Нужно накопить баллы! Позовите подруг через симулятор.",
        alertSuccessRu: "Успешно! Баллы списаны на оплату услуг. Налоговая и субсидии в безопасности!"
    },
    am: {
        appTitle: "Առողջության Օգնական", walletTitle: "Իմ Քսակը",
        welcome: "👵 Բարև ձեզ: Ես ձեր անձնական բժշկական օգնականն եմ: Սեղմեք ներքևի մեծ կարմիր կոճակը և ձայնով տվեք ձեր հարցը:",
        micSub: "Սեղմեք և խոսեք", ocrTitle: "📷 Հասկանալ անալիզները",
        ocrDesc: "Լուսանկարեք պոլիկլինիկայի անալիզների թուղթը, և ես կթարգմանեմ այն պարզ աղբյուրով:",
        ocrBtn: "Լուսանկարել թուղթը", balTitle: "Ձեր անվտանգ միավորների հաշվեկշիռը:",
        balDesc: "1 միավոր = 1 դրամ: Այս միավորները չեն երևում սոցիալական ծառայություններին և պաշտպանում են ձեր նպաստները:",
        simTitle: "🎁 Մարքեթինգի սիմուլյատոր:",
        simDesc: "Սեղմեք կոճակները՝ տեսնելու համար, թե ինչպես է աճում ձեր եկամուտը:",
        simB1: "+1 ընկերուհի բաժանորդագրվեց (Գիծ 1)", simB2: "Ընկերուհին հրավիրեց ծանոթին (Գիծ 2)",
        statTitle: "📊 Ձեր ցանցը և եկամուտները", statL1: "Ձեր հրավիրածները (Գիծ 1):",
        statL2: "Նրանց հրավիրածները (Գիծ 2):", statInc: "Ձեր պասիվ եկամուտը ամսական:",
        btnShare: "📢 Կիսվել ընկերուհու հետ WhatsApp-ով", btnSpend: "🛒 Վճարել կոմունալները (Idram / Telcell)",
        navP1: "Օգնական", navP2: "Քսակ",
        userQ: "🎤 <i>Դուք ասում եք:</i> «Ծնկներս ցավում են քայլելիս, ի՞նչ անել»:",
        botA: "🤖 <b>Օգնականի պատասխանը:</b> Ծնկների ցավը կարող է լինել ծանրաբեռնվածությունից: Նստեք, հանգստացեք: Եթե ցավը չանցնի, դիմեք ձեր տեղամասային բժշկին:",
        ocrUser: "📷 <i>Անալիզի լուսանկարը բեռնված է...</i>",
        ocrBot: "🔬 <b>Արյան անալիզի պարզաբանում:</b><br>• Հեմոգլոբին: 135 (Նորմա):<br>• Խոլեստերին: 6.2 (Բարձր է): Սահմանափակեք յուղոտ սնունդը:",
        shareText: "Բարև! Հրաշալի հավելված եմ գտել: Ձայնով հարցեր ես տալիս, անալիզներն էլ պարզ բացատրում է: Ներբեռնիր և մուտքագրիր իմ հեռախոսահամարը:",
        alertNoPoints: "Բավարար միավորներ չկան: Հրավիրեք ընկերուհիներին:",
        alertSuccessRu: "Успешно! Баллы списаны на оплату услуг. Налоговая и субсидии в безопасности!"
    }
};

let currentLang = 'ru';
let currentCurrency = 'RUB';
let currencySign = '₽';
let mlmRates = { level1: 175, level2: 50 };
let balance = 0; let l1Users = 0; let l2Users = 0; let monthlyIncome = 0;

function switchScreen(screenName) {
    document.getElementById('screen-assistant').style.display = 'none';
    document.getElementById('screen-wallet').style.display = 'none';
    document.getElementById('nav-assistant').classList.remove('active');
    document.getElementById('nav-wallet').classList.remove('active');
    const t = translations[currentLang];
    if(screenName === 'assistant') {
        document.getElementById('screen-assistant').style.display = 'block';
        document.getElementById('nav-assistant').classList.add('active');
        document.getElementById('header-title').innerText = t.appTitle;
    } else {
        document.getElementById('screen-wallet').style.display = 'block';
        document.getElementById('nav-wallet').classList.add('active');
        document.getElementById('header-title').innerText = t.walletTitle;
    }
}

function changeLanguage() {
    currentLang = document.getElementById('lang-select').value;
    updateLocalization();
    switchScreen('assistant');
}

function changeCurrency() {
    currentCurrency = document.getElementById('currency-select').value;
    if(currentCurrency === 'RUB') {
        currencySign = '₽';
        mlmRates = { level1: 175, level2: 50 };
    } else {
        currencySign = '֏';
        mlmRates = { level1: 875, level2: 250 };
    }
    balance = 0; l1Users = 0; l2Users = 0; monthlyIncome = 0;
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('income-val').innerText = monthlyIncome + ' ' + currencySign;
    document.getElementById('l1-count').innerText = '0 чел.';
    document.getElementById('l2-count').innerText = '0 чел.';
    document.querySelectorAll('.curr-sign').forEach(el => el.innerText = currencySign);
    updateLocalization();
}

function updateLocalization() {
    const t = translations[currentLang];
    document.getElementById('txt-welcome-msg').innerHTML = t.welcome;
    document.getElementById('txt-mic-sub').innerText = t.micSub;
    document.getElementById('txt-ocr-title').innerText = t.ocrTitle;
    document.getElementById('txt-ocr-desc').innerText = t.ocrDesc;
    document.getElementById('txt-ocr-btn').innerText = t.ocrBtn;
    document.getElementById('txt-bal-title').innerText = t.balTitle;
    document.getElementById('txt-bal-desc').innerText = t.balDesc;
    document.getElementById('txt-sim-title').innerText = t.simTitle;
    document.getElementById('txt-sim-desc').innerText = t.simDesc;
    document.getElementById('txt-sim-b1').innerText = t.simB1;
    document.getElementById('txt-sim-b2').innerText = t.simB2;
    document.getElementById('txt-stat-title').innerText = t.statTitle;
    document.getElementById('txt-stat-l1').innerText = t.statL1;
    document.getElementById('txt-stat-l2').innerText = t.statL2;
    document.getElementById('txt-stat-inc').innerText = t.statInc;
    document.getElementById('txt-btn-share').innerText = t.btnShare;
    document.getElementById('txt-btn-spend').innerText = t.btnSpend;
    document.getElementById('txt-nav-p1').innerText = t.navP1;
    document.getElementById('txt-nav-p2').innerText = t.navP2;
}

function simulateVoiceInput() {
    const chatBox = document.getElementById('chat-box');
    const t = translations[currentLang];
    chatBox.innerHTML += `<div class="msg user">${t.userQ}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">${t.botA}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

function simulateOCR() {
    const chatBox = document.getElementById('chat-box');
    const t = translations[currentLang];
    chatBox.innerHTML += `<div class="msg user">${t.ocrUser}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">${t.ocrBot}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
            }, 800);
}

function addNetworkUser(level) {
    if(level === 1) {
        l1Users++;
        balance += mlmRates.level1;
        monthlyIncome += mlmRates.level1;
        document.getElementById('l1-count').innerText = l1Users + ' чел.';
    } else if(level === 2) {
        l2Users++;
        balance += mlmRates.level2;
        monthlyIncome += mlmRates.level2;
        document.getElementById('l2-count').innerText = l2Users + ' чел.';
    }
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('income-val').innerText = monthlyIncome + ' ' + currencySign;
}

function shareWhatsApp() {
    const t = translations[currentLang];
    window.open(`https://whatsapp.com{encodeURIComponent(t.shareText)}`, '_blank');
}

function spendPoints() {
    const t = translations[currentLang];
    const minPoints = currentCurrency === 'RUB' ? 500 : 2500;
    if(balance < minPoints) {
        alert(t.alertNoPoints);
    } else {
        balance -= minPoints;
        document.getElementById('balance-val').innerText = balance;
        alert(currentCurrency === 'RUB' ? t.alertSuccessRu : "Հաջողությամբ! Կոմունալ վճարումները կատարված են Idram-ի միջոցով:");
    }
}
