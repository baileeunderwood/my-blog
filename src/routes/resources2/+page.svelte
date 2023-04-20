<h1>Paul Gavarni</h1>
<p>Paul Gavarni was a French artist and illustrator who was born in 1804 and died in 1866. He was known for his witty and satirical depictions of Parisian society, particularly the upper classes. Gavarni was a master of the pen and ink medium, and his illustrations are known for their delicate lines, lively compositions, and sly humor. His work had a significant influence on the development of caricature and cartooning in France and beyond.</p>
<p>Gavarni's work was published in many of the leading literary and artistic magazines of his day, including Le Charivari, La Caricature, and Le Journal des Dames et des Modes. He was also a prolific book illustrator, creating images for works by authors such as Honoré de Balzac and Alfred de Musset. Gavarni's illustrations often featured fashionable women, dandies, and other members of high society, whom he skewered with his sharp wit and incisive observations.</p>
<p>Despite his considerable talent and success, Gavarni's life was marked by personal difficulties and tragedy. He struggled with alcoholism and financial problems, and the death of his beloved daughter in 1855 had a profound impact on him. Nevertheless, his legacy as one of the great satirical artists of the 19th century remains secure, and his work continues to be admired and studied by artists and scholars today.</p>
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