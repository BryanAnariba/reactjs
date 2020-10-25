//const api_key = 'fGm8AKKMyJ0Zn04IjipnCmQbszBD92Dc';

const images = fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`);

images
.then(response => response.json())
.then((json) => {
    console.log(json);
})
.catch((error) => {
    console.warn(error);
});