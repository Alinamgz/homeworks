const imgs = document.querySelectorAll("img");

const stopBtn = document.createElement("button");
stopBtn.innerText = 'Астанавитесь';
stopBtn.className = 'stop-btn';
document.body.appendChild(stopBtn);

const continueBtn = document.createElement("button");
continueBtn.innerText = 'ладно, давай еще';
continueBtn.className = 'continue-btn';
document.body.appendChild(continueBtn);

let myIndex = 0;
let check = true;

const imgMagic = () => {

    imgs.forEach((img,i) => {
        if (myIndex === i) {
            img.style.opacity = '1';
            img.style.order = '0';
        } else {
            img.style.opacity = '0';
            img.style.order = '1';
        }
    });
    if(myIndex < 3) {
        myIndex++
    } else {
        myIndex = 0
    }
};

let magic = setInterval(imgMagic, 10000);

// const magic = setInterval(() => {
//     imgs.forEach((img,i) => {
//         if (myIndex === i) {
//             img.style.opacity = '1';
//             img.style.order = '0';
//         } else {
//             img.style.opacity = '0';
//             img.style.order = '1';
//         }
//     });
//     if(myIndex <= 3) {
//         myIndex++
//     } else {
//         myIndex = 0
//     }
// }, 500);

stopBtn.addEventListener("click", () =>{
    clearInterval(magic)
    check = false;
});
continueBtn.addEventListener("click", () => {
    if (check === false) {
        magic = setInterval(imgMagic, 10000);
        check = true;
    }
});