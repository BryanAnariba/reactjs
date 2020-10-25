export const getGifs = async (category) => {
    try {
        // Ponerlo asi tal cual
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=OJbyUiobElf6un1Q6PBRfO5Rsjyew0W2`;
        const resp = await fetch(url);
        const { data }= await resp.json();
        
        // Desestructurando solo lo que necesito
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        // Respuesta anexada al useState
        return gifs;
        //console.log(gifs);

    } catch (err) {
        return err;
    }
}