<script lang="ts">
    import { sql } from "@vercel/postgres"

    let newTodo = "";
    let todos = ["Hello"];

    async function updateStore() {
       await sql`insert into Todo (message) value (${newTodo})`;
    }
</script>
<div>
{#each todos as todo }
   <div>{todo}</div> 
{/each}
<input bind:value={newTodo} />
<button on:click={updateStore}>Add TODO</button>
</div>