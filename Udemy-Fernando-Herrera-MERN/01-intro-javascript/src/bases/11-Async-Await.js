const getImages = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5`);
        const resToJson = await response.json();
        console.log(resToJson);
    } catch (error) {
        console.error(error);
    }
}
getImages();