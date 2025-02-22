<template>
    <nav>
        <router-link to="/">Back to Story List</router-link>
    </nav>
</template>

<script>
export default {
    name: 'NavigationPage'
}
</script>

<style scoped>
nav {
    padding: 1rem;
    display: flex;
    gap: 1rem;
}

router-link {
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
}

router-link:hover {
    color: #42b983;
}
</style>