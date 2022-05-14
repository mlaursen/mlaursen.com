<script lang="ts">
  let href = "https://github.com/mlaursen";
</script>

<main>
  <h2>Hello,</h2>
  <p>
    This page is empty since I haven't really made this site yet. You can check
    out my <a {href}>GitHub</a>
    for some more information about projects I work on.
  </p>
</main>

<style>
  :root {
    --bg: #fafafa;
    --color: #212121;
    --line-width: 40em;
  }

  @media (max-width: 37.5em) {
    :root {
      --line-width: 17em;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #121212;
      --color: #fff;
    }
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    background-color: var(--bg);
    color: var(--color);
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  :global(body) {
    height: 100%;
    margin: 0;
    padding: 4rem 1rem 1rem;
  }

  main {
    display: block;
    margin: 0 auto;
    max-width: var(--line-width);
    width: 100%;
  }

  h2 {
    font-size: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.0083333333em;
    line-height: 3.75rem;
    margin: 0;
  }

  p {
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.0073529412em;
  }

  a {
    color: #2196f3;
    transition: color 0.15s;
  }

  a:visited {
    color: #1e88e5;
  }

  a:hover {
    color: #42a5f5;
  }
</style>
