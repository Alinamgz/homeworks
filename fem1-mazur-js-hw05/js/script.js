function NewUser (firstName, lastName, birthday) {
    firstName = prompt('what is your name?', 'Jassie');
    lastName = prompt('what is your surname', 'Smith');
    birthday = prompt('when is your day of birth? dd.mm.yyyy', '07.07.1995');

    this.getFirstName = firstName;
    this.getLastName = lastName;
    this.getBirthday = birthday;
    this.getLogin = userLogin();
    this.getAge = userAge();
    this.getPassword = userPassword();

    // getting login for our new user
    function userLogin () {
        return (`${firstName.slice(0,1)}${lastName}`).toLowerCase();
    }

    //findind out how old is our new user
    function userAge () {

        // receive current date to do calculations + current month and day to check for correct age calculation
        let today = new Date();
        let todayMonth = Number(today.getMonth());
        let todayDay = Number(today.getDate());

        // need this array to turn string from prompt into date-object
        let birthdayArr = birthday.split('.');

        // receive date-of-birth-object + month and day of birth for correct calculations
        let userBirthday = new Date(`${birthdayArr[2]}, ${birthdayArr[1]}, ${birthdayArr[0]}`);
        let birthdayMonth = Number(userBirthday.getMonth());
        let birthdayDay = Number(userBirthday.getDate());

        //lets do some math
        let deltaAge = today.getFullYear() - userBirthday.getFullYear();

        //and check if person already celebrated birthday
        if (birthdayMonth > todayMonth || (birthdayMonth === todayMonth && birthdayDay > todayDay)) {
            deltaAge = Number(deltaAge) - 1;
        }
        //done
        return deltaAge;
    }

    //creating password for our new user
    function userPassword (){
        return (`${firstName.slice(0,1).toUpperCase()}${lastName.toLowerCase()}${birthday.slice(-4)}`)
    }
}

let testUser = new NewUser();

console.log(`new user is`, testUser,`
new user is ${testUser.getAge} years old,
new user's password is ${testUser.getPassword}`);