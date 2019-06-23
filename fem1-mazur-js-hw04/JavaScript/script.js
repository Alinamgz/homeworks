const createNewUser = ()=> {
    let newUser = {
    firstName: prompt('what is your name?', 'Jassie'),
    lastName: prompt('what is your surname', 'Smith'),
};
    let userLogin = function () {
      return (`${newUser.firstName.slice(0,1)}${newUser.lastName}`).toLowerCase();
    };

    newUser.getLogin = userLogin();

    return newUser
};
console.log(createNewUser());