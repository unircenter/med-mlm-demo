document.addEventListener("DOMContentLoaded", function() {
    switchScreen('assistant');
    
    // Прямой перехват клика для кнопки вывода СБП
    const sbpZone = document.getElementById('sbp-clickable-zone');
    if(sbpZone) {
        sbpZone.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openSbpModal();
        });
    }
});

// Глобальные переменные баланса и сети
let balance = 0;
let l1Users = 0;
let l2Users = 0;
let monthlyIncome = 0;

const mlmRates = { level1: 175, level2: 50 };
const rewardCosts = { phone: 500, jkh: 1000, shop: 1500, pharma: 2000 };

// Четкая логика переключения экранов
function switchScreen(screenName) {
    document.getElementById('screen-assistant').style.display = 'none';
    document.getElementById('screen-wallet').style.display = 'none';
    document.getElementById('screen-rewards').style.display = 'none';
    
    document.getElementById('nav-assistant').classList.remove('active');
    document.getElementById('nav-wallet').classList.remove('active');
    document.getElementById('nav-rewards').classList.remove('active');
    
    if(screenName === 'assistant') {
        document.getElementById('screen-assistant').style.display = 'block';
        document.getElementById('nav-assistant').classList.add('active');
    } else if(screenName === 'wallet') {
        document.getElementById('screen-wallet').style.display = 'block';
        document.getElementById('nav-wallet').classList.add('active');
    } else if(screenName === 'rewards') {
        document.getElementById('screen-rewards').style.display = 'block';
        document.getElementById('nav-rewards').classList.add('active');
    }
}

// Имитация голосового ввода ассистента
function simulateVoiceInput() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="msg user">🎤 <i>Вы говорите:</i> «У меня покалывает в колене после ходьбы, что делать?»</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">🤖 <b>Ответ ассистента:</b> Покалывание может быть вызвано нагрузкой на сустав. Присядьте, отдохните и приложите прохладный компресс на 10 минут. Если боль усилится, обязательно обратитесь к врачу.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

// Имитация сканирования анализов
function simulateOCR() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="msg user">📷 <i>Загружено photo бланка анализов...</i></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">🔬 <b>Разбор анализа крови:</b><br>• Гемоглобин: 135 (В норме).<br>• Холестерин: 6.2 (Повышен). Ограничьте жирные продукты и проконсультируйтесь с терапевтом.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

// Добавление пользователей в симуляторе MLM
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
    document.getElementById('income-val').innerText = monthlyIncome + ' ₽/мес';
}

// Кнопка WhatsApp
function shareWhatsApp() {
    const shareText = "Привет! Нашла отличного голосового помощника по здоровью. Он мне перевел анализы и напоминает пить лекарства. Скачай и введи мой номер телефона при входе!";
    window.open(`https://whatsapp.com{encodeURIComponent(shareText)}`, '_blank');
}

// Покупки за баллы (ЖКХ, телефон, продукты)
function redeemReward(type) {
    const cost = rewardCosts[type];
    
    if (balance < cost) {
        alert("Недостаточно баллов на балансе! Используйте симулятор в разделе 'Кошелек', чтобы накопить баллы.");
    } else {
        balance -= cost;
        document.getElementById('balance-val').innerText = balance;
        document.getElementById('balance-val-rewards').innerText = balance;
        
        if (type === 'phone') alert("Успешно! Баланс мобильного телефона пополнен. Налоговая служба и СФР не увидят этот перевод!");
        else if (type === 'jkh') alert("Успешно! Счет за ЖКХ оплачен со счета компании. Квитанция об оплате выслана в чат!");
        else if (type === 'shop') alert("Успешно! Электронный сертификат сформирован. Покажите штрих-код на кассе в магазине для бесплатной покупки продуктов!");
        else if (type === 'pharma') alert("Успешно! Лекарства оплачены баллами со счета компании. Заберите ваш заказ в ближайшей аптеке по номеру телефона!");
    }
}

// Модальное окно вывода по СБП со всеми юридическими шагами
function openSbpModal() {
    const minAmount = 500;
    
    if (balance < minAmount) {
        alert("Недостаточно баллов на балансе! Используйте симулятор в разделе 'Кошелек', чтобы накопить баллы.");
        return;
    }
    
    let sum = prompt("Введите сумму для вывода на карту (Минимум 500):", minAmount);
    if (!sum || parseInt(sum) < minAmount) return;
    if (parseInt(sum) > balance) {
        alert("Недостаточно баллов на балансе!");
        return;
    }
    
    let inn = prompt("⚠️ Внимание! Официальный вывод на карту требует статуса самозанятого для сохранения индексации вашей пенсии. Введите ваш ИНН для автоматической регистрации чека в ФНС РФ:", "123456789012");
    if (!inn) return;
    
    let card = prompt("Введите номер телефона, привязанный к СБП, и выберите банк:", "+7 (999) 000-00-00, Т-Банк");
    if (!card) return;
    
    balance -= parseInt(sum);
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('balance-val-rewards').innerText = balance;
    alert("💰 Деньги успешно отправлены через СБП! Чек автоматически сформирован и передан в ФНС. Индексация вашей пенсии сохранена.");
}
