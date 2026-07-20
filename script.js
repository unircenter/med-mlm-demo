document.addEventListener("DOMContentLoaded", function() {
    switchScreen('assistant');
    
    // Создаем невидимый контейнер для модального окна купонов в самом конце body
    const modalDiv = document.createElement('div');
    modalDiv.id = 'coupon-modal-container';
    modalDiv.className = 'modal-overlay';
    modalDiv.innerHTML = `
        <div class="coupon-card">
            <div class="coupon-logo" id="m-coupon-icon">🛒</div>
            <div class="coupon-title" id="m-coupon-title">Пятёрочка</div>
            <div class="coupon-value" id="m-coupon-value">1000 ₽</div>
            <p style="font-size: 14px; color: #777;">Электронный целевой сертификат</p>
            <div class="coupon-barcode"></div>
            <div class="coupon-code-num" id="m-coupon-code">FIVE-83A1-92LF-0492</div>
            <div class="coupon-pin-box">ПИН-КОД: <span id="m-coupon-pin">4921</span></div>
            <div class="coupon-instruction" id="m-coupon-instr">
                <b>Инструкция для кассира:</b><br>
                1. Сканировать штрих-код с экрана телефона.<br>
                2. Ввести ПИН-код на терминале.<br>
                3. Сумма чека уменьшится автоматически.
            </div>
            <p style="font-size: 13px; color: #999; margin-bottom: 15px;">Действителен до: <span id="m-coupon-date">31.12.2026</span></p>
            <button class="btn" onclick="closeCouponModal()">Понятно, закрыть</button>
        </div>
    `;
    document.body.appendChild(modalDiv);
});

let balance = 0;
let l1Users = 0;
let l2Users = 0;
let monthlyIncome = 0;

const mlmRates = { level1: 175, level2: 50 };
const rewardCosts = { phone: 500, jkh: 1000, shop: 1500, pharma: 2000 };

function switchScreen(screenName) {
    document.getElementById('screen-assistant').style.setProperty('display', 'none', 'important');
    document.getElementById('screen-wallet').style.setProperty('display', 'none', 'important');
    document.getElementById('screen-rewards').style.setProperty('display', 'none', 'important');
    
    document.getElementById('nav-assistant').classList.remove('active');
    document.getElementById('nav-wallet').classList.remove('active');
    document.getElementById('nav-rewards').classList.remove('active');
    
    if(screenName === 'assistant') {
        document.getElementById('screen-assistant').style.setProperty('display', 'block', 'important');
        document.getElementById('nav-assistant').classList.add('active');
    } else if(screenName === 'wallet') {
        document.getElementById('screen-wallet').style.setProperty('display', 'block', 'important');
        document.getElementById('nav-wallet').classList.add('active');
    } else if(screenName === 'rewards') {
        document.getElementById('screen-rewards').style.setProperty('display', 'block', 'important');
        document.getElementById('nav-rewards').classList.add('active');
    }
}

function simulateVoiceInput() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="msg user">🎤 <i>Вы говорите:</i> «У меня покалывает в колене после ходьбы, что делать?»</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">🤖 <b>Ответ ассистента:</b> Покалывание может быть вызвано нагрузкой на сустав. Присядьте, отдохните и приложите прохладный компресс на 10 минут. Если боль усилится, обязательно обратитесь к врачу.</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

function simulateOCR() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="msg user">📷 <i>Загружено фото бланка анализов...</i></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    
    setTimeout(() => {
        chatBox.innerHTML += `<div class="msg bot">🔬 <b>Разбор анализа крови:</b><br>• Гемоглобин: 135 (В норме).<br>• Холестерин: 6.2 (Повышен). Ограничьте жирные продукты и проконсультируйтесь с терапевтом.</div>`;
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
    document.getElementById('income-val').innerText = monthlyIncome + ' ₽/мес';
}

function shareWhatsApp() {
    const shareText = "Привет! Нашла отличного голосового помощника по здоровью. Он мне перевел анализы и напоминает пить лекарства. Скачай и введи мой номер телефона при входе!";
    window.open(`https://whatsapp.com{encodeURIComponent(shareText)}`, '_blank');
}

// Алгоритм генерации и активации купонов (НОВОЕ!)
function redeemReward(type) {
    const cost = rewardCosts[type];
    
    if (balance < cost) {
        alert("Недостаточно баллов на балансе! Используйте симулятор в разделе 'Кошелек', чтобы накопить баллы.");
        return;
    }
    
    // Списание баллов
    balance -= cost;
    document.getElementById('balance-val').innerText = balance;
    document.getElementById('balance-val-rewards').innerText = balance;
    
    // Ветвление для ЖКХ и Мобильной связи (простые уведомления)
    if (type === 'phone') {
        alert("Успешно! Баланс мобильного телефона пополнен на 500 рублей. Налоговая служба и СФР не зафиксируют этот перевод как доход!");
        return;
    }
    if (type === 'jkh') {
        alert("Успешно! Счет за ЖКХ оплачен со счета компании на сумму 1000 рублей. Квитанция об оплате выслана в чат!");
        return;
    }
    
    // АЛГОРИТМ ГЕНЕРАЦИИ ДЛЯ МАГАЗИНОВ И АПТЕК
    let icon = "🛒";
    let title = "Пятёрочка";
    let mask = "FIVE-";
    let instruction = "<b>Инструкция для кассира «Пятёрочки»:</b><br>1. Переведите кассу в режим оплаты сертификатом.<br>2. Сканируйте штрих-код с экрана телефона.<br>3. Введите 4-значный ПИН-код.";
    
    if(type === 'pharma') {
        icon = "💊";
        title = "Аптека Апрель / Ригла";
        mask = "MED-";
        instruction = "<b>Инструкция для фармацевта аптеки:</b><br>1. Назовите номер интернет-бронирования.<br>2. Нажмите кнопку 'Применить скидочный купон 100%'.<br>3. Сканируйте код или введите комбинацию символов вручную.";
    }
    
    // Генерация случайных кодовых значений (Имитация UUID и крипто-подписи)
    const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
    const randomHex2 = Math.random().toString(16).substring(2, 6).toUpperCase();
    const pinCode = Math.floor(1000 + Math.random() * 9000);
    const finalCode = mask + randomHex + "-" + randomHex2 + "-2026";
    
    // Расчет даты окончания действия (Текущая дата + 30 дней)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    const formattedDate = expiryDate.toLocaleDateString('ru-RU');
    
    // Заполнение модального окна сгенерированными данными
    document.getElementById('m-coupon-icon').innerText = icon;
    document.getElementById('m-coupon-title').innerText = title;
    document.getElementById('m-coupon-value').innerText = cost + " ₽";
    document.getElementById('m-coupon-code').innerText = finalCode;
    document.getElementById('m-coupon-pin').innerText = pinCode;
    document.getElementById('m-coupon-instr').innerHTML = instruction;
    document.getElementById('m-coupon-date').innerText = formattedDate;
    
    // Показ модального купона
    document.getElementById('coupon-modal-container').classList.add('active');
}

function closeCouponModal() {
    document.getElementById('coupon-modal-container').classList.remove('active');
}

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
