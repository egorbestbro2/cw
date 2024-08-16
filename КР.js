var counter = document.getElementById("counter");
var alert = document.getElementById("alert")
var money = 2500;
function buyLap() {
    if ((money-900)>0) {
        money-=900;
        counter.textContent = money + "$";
        alert.textContent = "";
    }
    else if ((money-900)<900){
        alert.textContent = "У вас недостатньо грошей";
    }
}
function buyPho() {
    if ((money-300)>0) {
        money-=300;
        counter.textContent = money + "$";
        alert.textContent = "";
    }
    else if ((money-300)<300) {
        alert.textContent = "У вас недостатньо грошей";
    }
}
function buyCam() {
    if ((money-500)>0) {
        money-=500;
        counter.textContent = money + "$";
        alert.textContent = "";
    }
    else if ((money-500)<500) {
        alert.textContent = "У вас недостатньо грошей";
    }
}
function buyCom() {
    if ((money-1100)>0) {
        money-=1100;
        counter.textContent = money + "$";
        alert.textContent = "";
    }
    else if((money-1100)<1100) {
        alert.textContent = "У вас недостатньо грошей";
    }
}