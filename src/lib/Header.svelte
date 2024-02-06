<script lang="ts">
    import Calendar from "./Calendar.svelte";

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let today = new Date();
    let year = today.getFullYear();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
</script>

<header class="header">
    <div class="content">
    <Calendar></Calendar>
    <div>
        <span class="day">{day}</span>
        <span class="month">{month}</span>
        <span class="year">{year}</span>
    </div>
    </div>
</header>

<style>

    .header {
        background-color: black;
        color: white;
        padding: 10px;
    }

    .content {
        display: flex;
        flex-direction: row;
    }

    .day {
        font-size: 24px;
        font-weight: bold;
    }

    .month {
        font-size: 24px;
    }

</style>