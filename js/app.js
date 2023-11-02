const url = 'https://randomuser.me/api/';

const fetchPokemon = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Error fetching the pokemon');
    }
    const data = await response.json();
    return data;
}


document.querySelector('#btn').addEventListener('click', async () => {
    const person = await fetchPokemon(url);
    const firstName = person.results[0].name.first;
    const lastName = person.results[0].name.last;
    const country = person.results[0].location.country;
    const phone = person.results[0].cell;
    const email = person.results[0].email;
    const picture = person.results[0].picture.large;

    document.querySelector('#first').textContent = firstName;
    document.querySelector('#last').textContent = lastName;
    document.querySelector('#country').textContent = country;
    document.querySelector('#phone').textContent = phone;
    document.querySelector('#email').textContent = email;
    document.querySelector('#photo').src = picture;
})