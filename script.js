const gif = document.querySelector('img');
const searchBtn = document.getElementById('search-button');

const getInput = () => {
    const input = document.getElementById('search-input');
    return input.value;
}

const fetchGif = () => {
    const searchQuery = getInput();
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=AGuC5sBSpLwFCnqHU4p4po65KMPMse9G&s=${searchQuery}`, {
    mode: 'cors'
}).then((response) => {
    return response.json();
})
.then((response) => {
    const { data: { images: { original: { url }} } } = response;
    gif.src = url;
})
.catch((error) => console.log(error))
}

searchBtn.addEventListener('click', fetchGif);