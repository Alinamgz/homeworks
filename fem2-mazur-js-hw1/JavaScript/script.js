let userName = (prompt("Hello! What is your name?", "Jesse")),
    userAge = (prompt("How old are you?"));

//Вариант 1

if(userAge < 18){
    alert("You are not allowed to visit this website");
} else if (18 <= userAge && userAge<= 22){
    if (confirm("Are you sure you want to continue?")){
        alert("Welcome, " +userName);
        } else {
            alert("You are not allowed to visit this website")
        }
} else if (userAge > 22) {
    alert("Welcome, " +userName)
} else {
    alert("Please, use numbers to write your age")
}

//Вариант 2

// if (isNaN(userAge)){
//     alert("Please, use numbers to write your age")
// }else if(userAge < 18){
//     alert("You are not allowed to visit this website");
// } else if (userAge > 22){
//     alert("Welcome, " + userName);
// } else if (confirm("Are you sure you want to continue?")) {
//         alert("Welcome, " +userName);
// } else {
//         alert("You are not allowed to visit this website")
// }
