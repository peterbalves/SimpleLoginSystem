let user = prompt('Enter your user:');
let password = prompt('Enter your password: ');
let newUser
let newPassword

let listaUser = [{
    'name': 'Admin',
    'user': 'admin',
    'password': 'admin',
    'ID': 01,
},
{
    'name': 'Test1',
    'user': 'test1',
    'password': 'test123',
    'ID': 02,
},
{
    'name': 'Test2',
    'user': 'test2',
    'password': 'test1234',
    'ID': 03,
}];



let CheckarLogin = () => {
    if (user == listaUser[0].user && password == listaUser[0].password) {
        alert(`Hello ${user} Welcome`);
    }
    else if (user == listaUser[1].user && password == listaUser[1].password) {
        alert(`Hello ${user} Welcome`);
    }
    else if (user == listaUser[2].user && password == listaUser[2].password) {
        alert(`Hello ${user} Welcome`);
    }
    else{
        alert(`Hello ${user} incorrect login or password`);
    }
}
CheckarLogin();