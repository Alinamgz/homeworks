const createNewUser = (userName, userSurname)=> {
    let newUser = {};
    userName = prompt('what is your name?', 'Jassie');
    userSurname = prompt('what is your surname', 'Smith');
    newUser.firstName= userName;
    newUser.lastNname = userSurname;

    let userLogin = function () {
      return (`${newUser.firstName.slice(0,1)}${newUser.lastNname}`).toLowerCase();
    };

    newUser.getLogin = userLogin();

    return newUser
};
console.log(createNewUser());