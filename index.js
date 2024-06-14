console.log(window.Telegram.WebApp);

window.Telegram.WebApp.ready();

<button onClick={() => window.Telegram.WebApp.setParams({ color: '#00ff00' })}>Change color</button>

window.Telegram.WebApp.MainButton.setText('Test');
window.Telegram.WebApp.MainButton.show();