<script lang="ts">
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let today = new Date();
    let year = today.getFullYear();
    let day = days[today.getDay()];
    let month = months[today.getMonth()];
</script>

<header class="header">
    <span class="day">{day}</span>
    <span class="month">{month}</span>
    <span class="year">{year}</span>
</header>

<style>
    .header {
        background-color: black;
        color: white;
        padding: 10px;
    }

    .day {
        font-size: 24px;
        font-weight: bold;
    }

    .month {
        font-size: 24px;
    }
</style>