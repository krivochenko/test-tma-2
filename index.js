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

    const image = document.getElementById('image');
    const cropper = new Cropper(image, {
        aspectRatio: 16 / 9,
        crop(event) {
            console.log(event.detail.x);
            console.log(event.detail.y);
            console.log(event.detail.width);
            console.log(event.detail.height);
            console.log(event.detail.rotate);
            console.log(event.detail.scaleX);
            console.log(event.detail.scaleY);
        },
    });
}, 2000);

window.Telegram.WebApp.MainButton.onClick(function() {
    const current = parseInt(document.getElementById('counter').textContent);
    document.getElementById('counter').textContent = (current + 1).toString();
});