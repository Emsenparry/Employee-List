let ApiData = [];

fetch('https://reqres.in/api/users?page=2', {
    method: 'GET',
})
.then((response) => {
    return response.json()
})
.then((users) => {
    console.log(users);
    ApiData = users.data
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    for(let i = 0; i < ApiData.length; i++) {
        let user = ApiData[i];
        createElm(user);
    }
})
const createElm = () => {
    document.getElementById('content').innerHTML += `
       <h1>Hello there</h1>
   
        `
}


