<script lang="ts">
    import Header from "../lib/Header.svelte";
    import AddWorkout from "../lib/AddWorkout.svelte";
    import NewWorkout from "../lib/NewWorkout.svelte";
    import TestStore from "../lib/TestStore.svelte";
</script>

<div>
  <Header></Header>
  <TestStore></TestStore>
  <div class="workoutButton">
  <AddWorkout></AddWorkout>
  </div>
  <NewWorkout></NewWorkout>
</div>

<style>
  .workoutButton {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
</style>