document.addEventListener("DOMContentLoaded", function() {
    updateLocalization();
    switchScreen('assistant');
});

const translations = {
    ru: {
        appTitle: "Ассистент Здоровья", walletTitle: "Мой Кошелек", rewardsTitle: "Магазин Наград",
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
        btnShare: "📢 Поделиться с подругой в WhatsApp", navP1: "Помощник", navP2: "Кошелек", navP3: "Трата баллов",
        rewAvail: "Доступно для покупок:", rewTitle: "Куда потратить баллы без налогов?",
        rewDesc: "Выберите услугу. Сумма спишется с баланса приложения, а ваши льготы и государственные субсидии останутся под полной защитой.",
        rewPhone: "Пополнить мобильную связь", rewJkh: "Оплата услуг ЖКХ (Квартплата)", rewShop: "Сертификат в продуктовый (Пятерочка/Магнит)", rewPharma: "Заказ лекарств в онлайн-аптеке",
        rewSbpName: "Вывести на карту Мир (СБП)", rewSbpMin: "от 500",
        userQ: "🎤 <i>Вы говорите:</i> «У меня покалывает в колене после ходьбы, что делать?»",
        botA: "🤖 <b>Ответ ассистента:</b> Покалывание может быть вызвано нагрузкой на сустав. Присядьте, отдохните и приложите прохнадный компресс на 10 минут. Если боль усилится, обязательно обратитесь к врачу.",
        ocrUser: "📷 <i>Загружено фото бланка анализов...</i>",
        ocrBot: "🔬 <b>Разбор анализа крови:</b><br>• Гемоглобин: 135 (В норме).<br>• Холестерин: 6.2 (Повышен). Ограничьте жирные продукты и проконсультируйтесь с терапевтом.",
        shareText: "Привет! Нашла отличного голосового помощника по здоровью. Он мне перевел анализы и напоминает пить лекарства. Скачай и введи мой номер телефона при входе!",
        alertNoPoints: "Недостаточно баллов на балансе! Используйте симулятор в разделе 'Кошелек', чтобы накопить баллы.",
        sucPhone: "Успешно! Баланс мобильного телефона пополнен. Налоговая служба и СФР не увидят этот перевод!",
        sucJkh: "Успешно! Счет за ЖКХ оплачен со счета компании. Квитанция об оплате выслана в чат!",
        sucShop: "Успешно! Электронный сертификат сформирован. Покажите штрих-код на кассе в магазине для бесплатной покупки продуктов!",
        sucPharma: "Успешно! Лекарства оплачены баллами со счета компании. Заберите ваш заказ в ближайшей аптеке по номеру телефона!",
        
        sbpPromptSum: "Введите сумму для вывода на карту (Минимум 500):",
        sbpPromptInn: "⚠️ Внимание! Официальный вывод на карту требует статуса самозанятого для сохранения индексации вашей пенсии. Введите ваш ИНН для автоматической регистрации чека в ФНС РФ:",
        sbpPromptCard: "Введите номер телефона, привязанный к СБП, и выберите банк:",
        sbpSuccess: "💰 Деньги успешно отправлены через СБП! Чек автоматически сформирован и передан в ФНС. Индексация вашей пенсии сохранена."
    },
    am: {
        appTitle: "Առողջության Օգնական", walletTitle: "Իմ Քսակը", rewardsTitle: "Միավորների Խանութ",
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
        btnShare: "📢 Կիսվել ընկերուհու հետ WhatsApp-ով", navP1: "Օգնական", navP2: "Քսակ", navP3: "Ծախսել",
        rewAvail: "Հասանելի է գնումների համար:", rewTitle: "Որտե՞ղ ծախսել միավորները առանց հարկերի:",
        rewDesc: "Ընտրեք ծառայությունը: Գումարը կփոխանցվի հավելվածից, իսկ ձեր պետական նպաստները կմնան լիակատար պաշտպանության տակ:",
        rewPhone: "Լիցքավորել հեռախոսահամարը", rewJkh: "Կոմունալ վճարումներ (Գազ / Լույս / Ջուր)", rewShop: "Սննդի սերտիֆիկատ (Երևան Սիթի)", rewPharma: "Դեղորայքի պատվեր դեղատնից",
        rewSbpName: "Կանխիկացնել քարտին (Idram / ArCa)", rewSbpMin: "սկսած 2500",
        userQ: "🎤 <i>Դուք ասում եք:</i> «Ծնկներս ցավում են քայլելիս, ի՞նչ անել»:",
        botA: "🤖 <b>Օգնականի պատասխանը:</b> Ծնկների ցավը կարող է լինել ծանրաբեռնվածությունից: Նստեք, հանգստացեք: Եթե ցավը չանցնի, դիմեք ձեր տեղամասային բժշկին:",
        ocrUser: "📷 <i>Անալիզի լուսանկարը բեռնված է...</i>",
        ocrBot: "🔬 <b>Արյան անալիզի պարզաբանում:</b><br>• Հեմոգլոբին: 135 (Նորմա):<br>• Խոլեստերին: 6.2 (Բարձր է): Սահմանափակեք յուղոտ սնունդը:",
        shareText: "Բարև! Հրաշալի հավելված եմ գտել: Ձայնով հարցեր ես տալիս, անալիզներն էլ պարզ բացատրում է: Ներբեռնիր և մուտքագրիր իմ հեռախոսահամարը:",
        alertNoPoints: "Բավարար միավորներ չկան հաշվեկշռին: Օգտագործեք սիմուլյատորը 'Քսակ' բաժնում:",
        sucPhone: "Հաջողությամբ! Հեռախոսի հաշիվը լիցքավորված է:",
        sucJkh: "Հաջողությամբ! Կոմունալ վճարումները կատարված են ընկերության հաշվից:",
        sucShop: "Հաջողությամբ! Էլեկտրոնային սերտիֆիկատը պատրաստ է 'Երևան Սիթի'-ի համար:",
        sucPharma: "Հաջողությամբ! Դեղորայքը վճարված է դեղատնից ստանալու համար:",
        
        sbpPromptSum: "Մուտքագրեք կանխիկացման գումարը (Նվազագույնը 2500):",
        sbpPromptInn: "⚠️ Ուշադրություն! Քարտին փոխանցումը կատարվում է պաշտոնական հարկային համակարգով: Մուտքագրեք ձեր ՀՎՀՀ-ն:",
        sbpPromptCard: "Մուտքագրեք Idram-ի հեռախոսահամարը կամ ArCa քարտի համարը:",
        sbpSuccess: "💰 Գումարը հաջողությամբ փոխանցվեց Ձեր քարտին:"
    }
};

let currentLang = 'ru';
let currentCurrency = 'RUB';
let currencySign = '₽';
let mlmRates = { level1: 175, level2: 50 };
let rewardCosts = { phone: 500, jkh: 1000, shop: 1500, pharma: 2000 };

let balance = 0; let l1Users = 0; let l2Users = 0; let monthlyIncome = 0;

function switchScreen(screenName) {
    document.getElementById('screen-assistant').style.display = 'none';
    document.getElementById('screen-wallet').style.display = 'none';
    document.getElementById('screen-rewards').style.display = 'none';
    
    document.getElementById('nav-assistant').classList.remove('active');
    document.getElementById('nav-wallet').classList.remove('active');
    document.getElementById('nav-rewards').classList.remove('active');
    
    const t = translations[currentLang];
    
    if(screenName === 'assistant') {
        document.getElementById('screen-assistant').style.display = 'block';
        document.getElementById('nav-assistant').classList.add('active');
        document.getElementById('header-title').innerText = t.appTitle;
    } else if(screenName === 'wallet') {
        document.getElementById('screen-wallet').style.display = 'block';
        document.getElementById('nav-wallet').classList.add('active');
        document.getElementById('header-title').innerText = t.walletTitle;
    } else if(screenName === 'rewards') {
        document.getElementById('screen-rewards').style.display = 'block';
        document.getElementById('nav-rewards').classList.add('active');
        document.getElementById('header-title').innerText = t.rewardsTitle;
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
        rewardCosts = { phone: 500, jkh: 1000, shop: 1500, pharma: 2000 };
        document.getElementById('txt-rew-sbp-min').innerText = "от 500";
    } else {
        currencySign = '֏';
        mlmRates = { level1: 875, level2: 250 };
        rewardCosts = { phone: 2500, jkh: 5000, shop: 7500, pharma: 10000 };
        document.getElementById('txt-rew-sbp-min').innerText = "սկսած 2500";
    }
    balance = 0; l1Users = 0; l2Users = 0; monthlyIncome = 0;
    
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('balance-val-rewards').innerText = balance;
    document.getElementById('income-val').innerText = monthlyIncome + ' ' + currencySign;
    document.getElementById('l1-count').innerText = '0 чел.';
    document.getElementById('l2-count').innerText = '0 чел.';
    
    document.querySelector('.cost-val-phone').innerText = rewardCosts.phone;
    document.querySelector('.cost-val-jkh').innerText = rewardCosts.jkh;
    document.querySelector('.cost-val-shop').innerText = rewardCosts.shop;
    document.querySelector('.cost-val-pharma').innerText = rewardCosts.pharma;
    
    document.querySelectorAll('.curr-sign').forEach(el => el.innerText = currencySign);
    updateLocalization();
}

function updateLocalization() {
    const t = translations[currentLang];
    document.getElementById('txt-rew-title').innerText = t.rewTitle;
    document.getElementById('txt-rew-desc').innerText = t.rewDesc;
    document.getElementById('txt-rew-p-name').innerText = t.rewPhone;
    document.getElementById('txt-rew-j-name').innerText = t.rewJkh;
    document.getElementById('txt-rew-s-name').innerText = t.rewShop;
    document.getElementById('txt-rew-m-name').innerText = t.rewPharma;
    document.getElementById('txt-rew-sbp-name').innerText = t.rewSbpName;
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
    document.getElementById('balance-val-rewards').innerText = balance;
    document.getElementById('income-val').innerText = monthlyIncome + ' ' + currencySign;
}

function shareWhatsApp() {
    const t = translations[currentLang];
    window.open(`https://whatsapp.com{encodeURIComponent(t.shareText)}`, '_blank');
}

function redeemReward(type) {
    const t = translations[currentLang];
    const cost = rewardCosts[type];
    
    if (balance < cost) {
        alert(t.alertNoPoints);
    } else {
        balance -= cost;
        document.getElementById('balance-val').innerText = balance;
        document.getElementById('balance-val-rewards').innerText = balance;
        
        if (type === 'phone') alert(t.sucPhone);
        else if (type === 'jkh') alert(t.sucJkh);
        else if (type === 'shop') alert(t.sucShop);
        else if (type === 'pharma') alert(t.sucPharma);
    }
}

function openSbpModal() {
    const t = translations[currentLang];
    const minAmount = currentCurrency === 'RUB' ? 500 : 2500;
    
    if (balance < minAmount) {
        alert(t.alertNoPoints);
        return;
    }
    
    let sum = prompt(t.sbpPromptSum, minAmount);
    if (!sum || parseInt(sum) < minAmount) return;
    if (parseInt(sum) > balance) {
        alert(t.alertNoPoints);
        return;
    }
    
    let inn = prompt(t.sbpPromptInn, "123456789012");
    if (!inn) return;
    
    let card = prompt(t.sbpPromptCard, "+7 (999) 000-00-00, Т-Банк");
    if (!card) return;
    
    balance -= parseInt(sum);
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('balance-val-rewards').innerText = balance;
    alert(t.sbpSuccess);
}
