<script>
    import '../global.css';
  </script>
  
  <nav>
    <a href="/">Home</a>
    <a href="/posts">Random Artwork</a>
    <a href="/favs">Bernard Boutet</a>
    <a href="/resources">Ancient Egyptian</a>
    <a href="/resources2">Paul Gavarni</a>
    <a href="/resources3">Joan Taxay-Weinger</a>
  </nav>
  
  <main>
    <slot/>
  </main>

<footer>
    &copy Bailee Underwood 2023
</footer>

<style>
    nav, footer {
      display: flex;
      justify-content: space-evenly;
      padding: .5em;
      background-color:rgb(216, 159, 220);
      color: rgb(164, 231, 243);
    }
    main {
      grid-row: 2;
      margin-left: 2rem; 
      margin-right: 2rem;   
    }
    footer {
    grid-row: 3;
    position: sticky;
    bottom: 0;
  }
</style>
  

