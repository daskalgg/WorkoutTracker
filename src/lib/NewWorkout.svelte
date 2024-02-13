<script lang="ts">
    let showModal = false;
    let dialog : HTMLDialogElement;
    $: if (dialog && showModal) dialog.showModal();

    let excerciseName = "";
    let excerciseDescription = "";
    let excerciseImage = "";

    function saveExcersice() {

    }
</script>

<div>
<button class="button" on:click={() => {showModal = true}}>
    Add New Excercise
</button>
    {#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
    <dialog 
    bind:this={dialog} 
    on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
    <div  on:click|stopPropagation>
        <div class="modal">
            <label for="name">Name</label>
            <input name="name" class="input" bind:value={excerciseName} />
            <label for="descripton">Description</label>
            <textarea name="description" class="input" bind:value={excerciseDescription} />
            <label for="url">Image URL</label>
            <input name="url" type="url" class="input" bind:value={excerciseImage} />
        </div>
        <button on:click={saveExcersice}>Create</button>
    </div>
</dialog>
    {/if}
</div>

<style>
    dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}

    .button {
        padding: 10px;
        border-radius: 30px;
        margin: 10px;
        font-weight: bold;
        background-color: lightcoral;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .modal {
        display: flex;
        flex-direction: column;
    }

    .input {
        margin: 4px;
    }
</style>