<h1>Ancient Eqyptian</h1>
<p>Ancient Egyptian art is a fascinating subject that has captivated people for centuries. The art of Ancient Egypt was created for both practical and spiritual purposes, and it played an important role in the country's culture and society. Ancient Egyptian art is characterized by a unique blend of realism and stylization, with artists striving to capture the essence of their subjects while also imbuing them with a sense of symbolic significance.</p>
<p>One of the most notable features of Ancient Egyptian art is its longevity. The art of Ancient Egypt spans a period of more than 3000 years, from the Early Dynastic Period (c. 3150 BCE) to the end of the Ptolemaic dynasty (30 BCE). Despite the passing of millennia, the art of Ancient Egypt has remained remarkably consistent in terms of style and subject matter, thanks in part to the country's strong cultural traditions and enduring religious beliefs.</p>
<p>Perhaps the most famous works of Ancient Egyptian art are the monumental sculptures and reliefs that adorn the temples, tombs, and public spaces of the country. These works, which depict gods, pharaohs, and other important figures, were created to inspire awe and convey a sense of power and authority. The craftsmanship and attention to detail that went into these works is truly remarkable, and they continue to astound and inspire art lovers around the world to this day.</p>
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