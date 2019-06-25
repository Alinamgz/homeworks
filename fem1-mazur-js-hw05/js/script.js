const createNewUser = ()=> {
    let newUser = {
        firstName: prompt('what is your name?', 'Jassie'),
        lastName: prompt('what is your surname', 'Smith'),
        birthday: prompt('when is your day of birth? dd.mm.yyyy', '07.07.1995')
    };

    // getting login for our new user
    function userLogin () {
        return (`${newUser.firstName.slice(0,1)}${newUser.lastName}`).toLowerCase();
    }


    //findind out how old is our new user
    function userAge () {

        let today = new Date();
        let todayMonth = Number(today.getMonth());
        let todayDay = Number(today.getDate());

        let birthdayArr = newUser.birthday.split('.');

        let userBirthday = new Date(`${birthdayArr[2]}, ${birthdayArr[1]}, ${birthdayArr[0]}`);
        let birthdayMonth = Number(userBirthday.getMonth());
        let birthdayDay = Number(userBirthday.getDate());

        let deltaAge = today.getFullYear() - userBirthday.getFullYear();
        let age = 0;

        if (birthdayMonth > todayMonth || (birthdayMonth === todayMonth && birthdayDay > todayDay)) {
            age = Number(deltaAge) - 1;
        } else {
            age = 'nope'
        }

        return age;
    }


    //creating password for our new user
    function userPassword (){
        return (`${newUser.firstName.slice(0,1).toUpperCase()}${newUser.lastName.toLowerCase()}${newUser.birthday.slice(-4)}`)
    }


    newUser.getLogin = userLogin();
    newUser.getAge = userAge();
    newUser.getPassword = userPassword();

    return newUser
};
console.log(createNewUser(), createNewUser().getAge, createNewUser().getPassword);