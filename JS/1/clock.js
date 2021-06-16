let name=prompt("adınız")
document.getElementById("myName").innerHTML=name

let dt=document.getElementById("myClock");

  
function clock(){
    let now=new Date();
    let day=""
    switch(now.getDay()){
        case 1:day="Pazartesi";break;
        case 2:day="Salı";break;
        case 3:day="Çarşamba";break;
        case 4:day="Perşembe";break;
        case 5:day="Cuma";break;
        case 6:day="Cumartesi";break;
        case 0:day="Pazar";break;
        default:day="hata" ;break;
    }
    dt.innerHTML=now.toLocaleTimeString() +" "+day

};

setInterval(function(){clock()},1000)