// let userName = (prompt("Hello! What is your name?", "Jesse"));
// let userAge = (prompt("How old are you?"));

//Вариант 1

// if(userAge < 18){
//     alert("You are not allowed to visit this website");
// } else if ( userAge >= 18 && userAge<= 22){
//     if (confirm("Are you sure you want to continue?")){
//         alert("Welcome, " +userName);
//         } else {
//             alert("You are not allowed to visit this website")
//         }
// } else if (userAge > 22) {
//     alert("Welcome, " +userName)
// } else {
//     alert("Please, use numbers to write your age")
// }

// Вариант 2

//Узнаем и проверяем имя:
let userName = (prompt("Hello! What is your name?"));

while(userName === "" || !isNaN(userName)){
    if (userName === null){
            if (confirm("DO you want to stay?")){
                userName = prompt(`${userName}, GIMME your name, please`);
            } else {
                break;
            }
    } else{
        alert(" Where is your name?");
        userName = prompt( `${userName}, enter your name, please`);
    }
}

//Если смогли добыть имя, узнаем и проверяем возраст:
if (userName !== "" && userName !== null) {
    let userAge = (prompt("How old are you?"));

    while (isNaN(userAge)) {
        alert("Please, use numbers to write your age");
        userAge = prompt("How old are you?", userAge);
    }
    if (userAge < 18) {
        alert("You are not allowed to visit this website");
    } else if (userAge > 22) {
        alert("Welcome, " + userName);
    } else if (confirm("Are you sure you want to continue?")) {
        alert("Welcome, " + userName);
    } else {
        alert("You are not allowed to visit this website")
    }
}