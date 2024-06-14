console.log(window.Telegram.WebApp);

let scrolled = false

window.Telegram.WebApp.onEvent('viewportChanged', function(isStateStable) {
    if (!scrolled && isStateStable) {
        window.scrollTo(0, 1);
    }
});

window.Telegram.WebApp.ready();
window.Telegram.WebApp.setBackgroundColor('#000000');
window.Telegram.WebApp.setHeaderColor('#000000');
window.Telegram.WebApp.expand();

window.Telegram.WebApp.MainButton.setText('Test');
window.Telegram.WebApp.MainButton.show();

window.Telegram.WebApp.MainButton.onClick(function() {
    const current = parseInt(document.getElementById('counter').textContent);
    document.getElementById('counter').textContent = (current + 1).toString();
});