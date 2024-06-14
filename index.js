console.log(window.Telegram.WebApp);

// window.Telegram.WebApp.onEvent('viewportChanged', function(isStateStable) {
//     console.log('viewportChanged', isStateStable);
// });
window.Telegram.WebApp.ready();
window.Telegram.WebApp.setBackgroundColor('#ff0000');
window.Telegram.WebApp.setHeaderColor('#ff0000');
window.Telegram.WebApp.expand();

window.Telegram.WebApp.MainButton.setText('Test');
window.Telegram.WebApp.MainButton.show();



const overflow = 100;

// document.body.style.overflowY = 'hidden'
// document.body.style.marginTop = `${overflow}px`
// document.body.style.height = window.innerHeight + overflow + "px"
// document.body.style.paddingBottom = `${overflow}px`
window.scrollTo(0, overflow);

window.Telegram.WebApp.MainButton.onClick(function() {
    const current = parseInt(document.getElementById('counter').textContent);
    document.getElementById('counter').textContent = (current + 1).toString();
});