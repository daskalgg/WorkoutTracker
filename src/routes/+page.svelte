<script lang="ts">
 import { enhance } from '$app/forms';
 let text = "";
 export let form;
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<p>{form}</p>
<form method="post" action="?/send" use:enhance>
    <input name="text" bind:value={text} />
    <button>Save</button>
</form>
