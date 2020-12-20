const API = 'Fchhxqpcq2zoXHjbkrSTBgaRUXWIl3tk';

fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ API }`)
.then(response => response.json())
.then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch((error) => {
    console.error(error);
});