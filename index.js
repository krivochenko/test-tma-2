console.log(window.Telegram.WebApp);

window.Telegram.WebApp.ready();
window.Telegram.WebApp.setBackgroundColor('#111111');
window.Telegram.WebApp.setHeaderColor('#111111');
window.Telegram.WebApp.expand();

window.Telegram.WebApp.enableClosingConfirmation();

window.Telegram.WebApp.MainButton.setText('Test');
window.Telegram.WebApp.MainButton.show();

setTimeout(() => {
    document.getElementById('content').style.display = 'block';
}, 2000);

window.Telegram.WebApp.MainButton.onClick(function() {
    const current = parseInt(document.getElementById('counter').textContent);
    document.getElementById('counter').textContent = (current + 1).toString();
});