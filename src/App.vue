<script setup>
import AppHeader from './components/AppHeader.vue';
import SearchPage from './components/SearchPage.vue';
</script>

<template>
    <div class="container">
        <AppHeader />
        <SearchPage />
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 1366px;
    padding: 50px;
    margin: 0 auto;
    color: #333333;
}
</style>
