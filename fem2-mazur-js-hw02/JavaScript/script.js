let numba = prompt("gimme some numba");

for (let result = 0; result <= numba; result++){
    if (numba < 5){
        console.log("Sorry, no numba");
        break;
    } else if (result % 5 === 0){
        console.log(result);
    } else {
        continue;
    }
}