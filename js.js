setInterval(function () {
    const time = document.querySelector('#time');
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day_night = 'AM'
    if(hr > 12){
        day_night = ' PM';
        hr= hr -12;
    }
    if(hr > 10){
        hr = '0' + hr;
    }

    if(min < 10){
        hr = '0' + min;
    }
    if(sec < 10){
        hr = '0' +sec;
    }
        time.textContent = hr +':'+ min +':' + sec +''+  day_night;
})