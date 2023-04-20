export async function load({ fetch }) {
    const page = Math.floor(Math.random() * 10000) + 1;
    
    const url = 'https://api.artic.edu/api/v1/artworks?fields=image_id,title,artist_id,artist_title,date_display,medium_display&page=' + page + '&limit=12&medium';
    
    const artReq = await fetch(url);
    
    const artRes = await artReq.json();
    
    const artworks = artRes.data;
    console.log(artworks)
    
    return {
    artworks
    }
    
    }