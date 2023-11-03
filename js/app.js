const url = 'https://randomuser.me/api/';

const fetchPerson = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching the pokemon');
    }
    const data = await response.json();
    return data;
}

let firstName;
let lastName;
let phone;

const fetchDataAndRender = async () => {
    let person;
    try {
        person = await fetchPerson(url);
    } catch (error) {
        console.error(error)
    }
    firstName = person.results[0].name.first;
    lastName = person.results[0].name.last;
    const country = person.results[0].location.country;
    phone = person.results[0].cell;
    const email = person.results[0].email;
    const picture = person.results[0].picture.large;

    document.querySelector('#first').textContent = firstName;
    document.querySelector('#last').textContent = lastName;
    document.querySelector('#country').textContent = country;
    document.querySelector('#phone').textContent = phone;
    document.querySelector('#email').textContent = email;
    document.querySelector('#photo').src = picture;
}

const addNewContact = (firstName, lastName, phone) => {
    const row = document.createElement('tr');
    row.innerHTML =
    `
    <td>${firstName} ${lastName}</td>
    <td>${phone}</td> 
    `
    document.querySelector('tbody').appendChild(row);
    document.querySelector('.table').style.display = 'table';
}

window.addEventListener('load', fetchDataAndRender);

setInterval(fetchDataAndRender, 5000);

document.querySelector('#btnInterview').addEventListener('click', () => {
    addNewContact (firstName, lastName, phone) 
})