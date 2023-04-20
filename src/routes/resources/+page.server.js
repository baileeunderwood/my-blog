export async function load({ fetch }) {
    const page = Math.floor(Math.random() * 10000) + 1;
    
const artist = 37541

    //const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_title,date_display,medium_display&page=' + page + '&limit=12&q=Graham Howe';
    const url = "https://api.artic.edu/api/v1/artworks/search?fields=id,title,artist_title,artist_id,image_id&query[term][artist_id]="+artist;

    //Graham Howe
    //50520
    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
    
    const artworks = artRes.data;

    console.log(artworks)
    
    return {
    artworks
    }
    
    }