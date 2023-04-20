<h1>Random Artwork</h1>
<p> Welcome to this page! Here, you will find a variety of miscellaneous artwork that may pique your interest. Whether you are a lover of paintings, sculptures, or digital art, we have something for everyone. Our collection of artwork spans across different styles and mediums, from classical to contemporary, and everything in between. So if you are looking to appreciate some stunning and diverse art pieces, you have come to the right place. Browse through our gallery and enjoy the beauty and creativity of the artwork on display.</p>
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