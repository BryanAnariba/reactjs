const API = 'Fchhxqpcq2zoXHjbkrSTBgaRUXWIl3tk';

const getImagen = async () => {
    try {
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ API }`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}

getImagen();