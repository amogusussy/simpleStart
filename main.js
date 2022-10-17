function getId(a){
    return document.getElementById(a)
}

async function time() 
{
    while (true){
        const today = new Date();
        let hour = twelveHour(checkTime(today.getHours()));
        let minute = checkTime(today.getMinutes());
        numToWord = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","ELEVEN","TWELVE","THIRTEEN","FOURTEEN","FIFTEEN","SIXTEEN","SEVENTEEN","EIGHTEEN","NINETEEN","TWENTY","TWENTY ONE","TWENTY TWO","TWENTY THREE","TWENTY FOUR","TWENTY FIVE","TWENTY SIX","TWENTY SEVEN","TWENTY EIGHT","TWENTY NINE","THIRTY","THIRTY ONE","THIRTY TWO","THIRTY THREE","THIRTY FOUR","THIRTY FIVE","THIRTY SIX","THIRTY SEVEN","THIRTY EIGHT","THIRTY NINE","FORTY","FORTY ONE","FORTY TWO","FORTY THREE","FORTY FOUR","FORTY FIVE","FORTY SIX","FORTY SEVEN","FORTY EIGHT","FORTY NINE","FIFTY","FIFTY ONE","FIFTY TWO","FIFTY THREE","FIFTY FOUR","FIFTY FIVE","FIFTY SIX","FIFTY SEVEN","FIFTY EIGHT","FIFTY NINE"]
        getId("hour").innerHTML = numToWord[parseInt(hour)];
        getId("min").innerHTML = numToWord[parseInt(minute)];
        await delay(1000);
    }
}

function delay(time) 
{
    return new Promise(resolve => setTimeout(resolve, time));
}


function twelveHour(a){
    if (a > 12){
        return a - 12;
    } else if (a < 12) {
        return a;
    }
}

function checkTime(i) 
{
    if (i < 10) {i = "0" + i};
    return i;
}

function wordDay(int) {
    switch (int) {
        case 1: return "MON";
        case 2: return "TUE";
        case 3: return "WED";
        case 4: return "THU";
        case 5: return "FRI";
        case 6: return "SAT";
        case 7: return "SUN";
        }
}

function date()
{
    const today = new Date();
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    
    let day = today.getUTCDate();
    let month = months[today.getMonth()];
    getId("month").innerHTML = month.toUpperCase();
    getId("monthDay").innerHTML = ("+" + day).slice(-3);
    getId("day").innerHTML = wordDay(today.getDay())
}

function welcomeMessage() {
    var today = new Date();
    var h = today.getHours() + 1;
    var userName = "Matthew";
    var message = String();
    if (h <= 12 && h >= 6){
        message = "Good Morning, ";
    } else if (h > 12 && h <= 21){
        message = "Good evening, ";
    } else if (h > 21 || (h < 6 && h > 12)) {
        message = "Go to sleep, "
    } else {
        message = "Hello, ";
    }
    message = message + "<span class='name'>" + userName +"</span>";
    document.getElementById("welcome").innerHTML = message;
}

function weatherBalloon( cityID ) {
    var key = '4d8fb5b93d4af21d66a2948710284366';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        let celcius = Math.round(parseFloat(data.main.temp)-273.15);
        // document.getElementById('description').innerHTML = data.weather[0].description;
        // document.getElementById('temp').innerHTML = celcius + '&deg;';
        // document.getElementById('location').innerHTML = data.name;
        getId("weather").innerHTML = "Todays weather in " + data.name + " is " + data.weather[0].description + " with a temp of " + celcius + "&deg C"; 
    });
}

function main(){
    time();
    date();
    welcomeMessage()
    weatherBalloon(2639272)
}
