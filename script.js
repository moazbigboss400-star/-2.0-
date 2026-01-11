const dhikrList = [
    "سبحان الله وبحمده، سبحان الله العظيم",
    "لا حول ولا قوة إلا بالله العلي العظيم",
    "اللهم صلِّ وسلم على نبينا محمد",
    "أستغفر الله وأتوب إليه",
    "لا إله إلا الله وحده لا شريك له",
    "يا حي يا قيوم برحمتك أستغيث"
];

function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    if(!dateTimeElement) return;
    const now = new Date();
    const gregorian = now.toLocaleDateString('ar-SA-u-ca-gregory', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const hijri = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { year: 'numeric', month: 'long', day: 'numeric' }).format(now);
    const time = now.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' });
    dateTimeElement.innerHTML = `${gregorian} | ${hijri} | ${time}`;
}

function updateDhikr() {
    const dhikrElement = document.getElementById('daily-dhikr');
    if (dhikrElement) {
        dhikrElement.innerText = dhikrList[Math.floor(Math.random() * dhikrList.length)];
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('dark-mode');
    updateDateTime();
    updateDhikr();
    setInterval(updateDateTime, 1000);
});
