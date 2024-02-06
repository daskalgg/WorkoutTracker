<script lang="ts">
    import Header from "../lib/Header.svelte";
    import AddWorkout from "../lib/AddWorkout.svelte";
</script>

<div>
  <Header></Header>
  <div class="workoutButton">
  <AddWorkout></AddWorkout>
  </div>
</div>

<style>
  .workoutButton {
    display: flex;
    justify-content: center;
    margin: 20px;
  }
</style>