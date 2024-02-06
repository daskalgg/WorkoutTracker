<script lang="ts">
    import { Router, Link, Route } from "svelte-routing";
    import About from "./routes/About.svelte";
    import Home from "./routes/Home.svelte";
    export let url = "";
</script>

<main>
  <Router {url}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
</main>
