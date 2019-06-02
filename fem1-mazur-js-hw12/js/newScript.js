// Dig out needed imgs
const imgNL  = document.querySelectorAll("img");

// main part
let counter = 1;
let check = true;

const imgVisibility = () => {

    imgNL.forEach((img, i) => {
        if (counter === i) {
            img.style.visibility = 'visible';
            img.style.order = '0'
        } else {
            img.style.visibility= 'hidden';
            img.style.order = '1'
        }
    });

    if (counter < 3){
        counter++
    } else {
        counter = 0
    }
};

let imgVisibilityCycle = setInterval(imgVisibility,10000);

// Stop-Btn
const stopBtn = document.createElement("button");
stopBtn.className = 'stop-btn';
stopBtn.innerText = "Прекратить";
document.body.appendChild(stopBtn);

stopBtn.addEventListener("click", () => {
    clearInterval(imgVisibilityCycle);
    check = false;
});

// Continue-Btn
const continueBtn = document.createElement("button");
continueBtn.className = 'continue-btn';
continueBtn.innerText = 'Возобновить показ';
document.body.appendChild(continueBtn);

continueBtn.addEventListener("click", () => {
    if (check === false) {
        imgVisibilityCycle = setInterval(imgVisibility , 10000);
        check = true
    }
});