let ApiData = []; //Empty array

fetch('https://reqres.in/api/users?page=2', { //Fetching the API data
    method: 'GET',
})
.then((response) => {
    return response.json() //Returns response as JSON
})
.then((users) => {
    console.log(users);
    ApiData = users.data //Data inside users
})
.catch((error) => {
    console.error(error); //Catches error if our promise fails
})
.finally(() => { //Runs finally if there are no errors
    for(let i = 0; i < ApiData.length; i++) {
        let user = ApiData[i];
        createElm(user);
    }
})
const createElm = (user) => { //Creates innerHTML elements with our data from the API
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




