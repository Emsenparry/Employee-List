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
const createElm = (user) => {
    document.getElementById('content').innerHTML += `

    <figure class="container">
    <img src="${user.avatar}">
    <figcaption>
    <h2>${user.first_name} ${user.last_name}</h2>
    <p>${user.email}</p>
    </figcaption>
   </figure>
        `
    
}




