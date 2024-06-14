console.log(window.Telegram.WebApp);

window.Telegram.WebApp.ready();

window.Telegram.WebApp.MainButton.setText('Test');
window.Telegram.WebApp.MainButton.show();

window.Telegram.WebApp.MainButton.on('click', function() {
    const current = parseInt(document.getElementById('counter').textContent);
    document.getElementById('counter').textContent = (current + 1).toString();
});