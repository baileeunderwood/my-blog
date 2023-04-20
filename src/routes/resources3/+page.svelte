<h1>Joan Taxay-Weinger</h1>
<p>Joan Weinger was an American artist born in New York City in 1928 and passed away in 2014. She was known for her vibrant and expressive abstract paintings that were heavily influenced by the New York School of Abstract Expressionism. Weinger's work was characterized by bold, gestural brushstrokes, vivid colors, and a sense of movement and spontaneity.</p>
<p>Throughout her career, Weinger experimented with a range of mediums, including oil paint, acrylics, and mixed media. Her work was exhibited widely in galleries and museums throughout the United States, and she received numerous awards and honors for her contributions to the art world. She was also an active member of the New York art community, participating in exhibitions and events with other notable artists of the time.</p>
<p>Weinger's art was inspired by a wide range of sources, including nature, music, and poetry. She often worked in a large scale, using her body and physical movements to create sweeping, dynamic compositions. Her work is celebrated for its emotional depth and energy, and it continues to be appreciated by collectors and art lovers around the world.</p>
<script>
    export let data;
    const {artworks} = data;
    </script>
    
    <article>
    {#each artworks as { title, artist_title, image_id, date_display, medium_display }}
    <figure>
    <img src="https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg" alt="">
    <figcaption><strong>{title}</strong> by {artist_title}<br>{date_display} | {medium_display}</figcaption>
    </figure>
    {/each}
    </article>
    
    
    <style>
    article {
    padding: 2em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2em;
    }
    </style>