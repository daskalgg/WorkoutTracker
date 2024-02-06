<script lang="ts">
    import { persisted } from "svelte-persisted-store";
    import {get} from 'svelte/store'
    const store = persisted("test", new Array<string>())

    let newTodo = "";
    let todos = Array<string>;
    store.subscribe((t) => todos = t)

    function updateStore() {
    store.update(todos => [...get(store), newTodo])
    newTodo = ""
    }
</script>
<div>
{#each todos as todo }
   <div>{todo}</div> 
{/each}
<input bind:value={newTodo} />
<button on:click={updateStore}>Add TODO</button>
</div>