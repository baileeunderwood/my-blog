<h1>Bernard Boutet</h1>
<p>Bernard Boutet is a French artist who rose to prominence during the Art Deco movement of the 1920s and 1930s. Born in 1880, Boutet began his career as an apprentice at a lithography studio, where he learned the techniques that would later inform his signature style. His works often feature bold, geometric shapes and rich, vibrant colors, and he was particularly skilled at depicting the female form. Boutet was also known for his innovative use of new printing techniques, such as the pochoir process, which allowed him to create intricate and detailed images that were both beautiful and technically impressive.</p> 
<p>Boutet's work was highly sought after by collectors during his lifetime, and he received numerous commissions from wealthy patrons and fashion houses. His illustrations graced the pages of some of the most prestigious fashion magazines of the day, including Vogue and Harper's Bazaar. Today, his work is still admired for its elegance and sophistication, and his pieces can be found in the collections of major museums around the world.</p>
<p>Despite his success as an artist, Boutet lived a troubled and often tragic life. He struggled with alcoholism and financial difficulties, and his personal relationships were often tumultuous. He died in 1949 at the age of 69, leaving behind a legacy of stunning artwork that continues to inspire and captivate art lovers around the globe.</p>
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