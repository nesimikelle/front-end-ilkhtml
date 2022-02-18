const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");

let username;
username = prompt("Adınız: ");



if(username.trim().length > 0){
    myName.innerHTML = username;
}else{
    myName.innerHTML = "İsimsiz Misafir";
}


function getDayString(dayNumber){
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşaba', 'Perşembe', 'Cuma' , 'Cumartesi'];
    return days[dayNumber];
}



function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;

    const options = { hour12: false }
    currentTimeAndDate = `${date.toLocaleTimeString('tr-TR', options)} ${getDayString(date.getDay())}`;
    return currentTimeAndDate;

}

m
function showTime(){
    myClock.innerHTML = getTimeAndDay();
}


setInterval(showTime);