<script setup>
import Sidebar from './Sidebar.vue';
import UserCard from './UserCard.vue';
</script>

<template>
    <div class="page-container">
        <Sidebar />
        <UserCard />
    </div>
</template>

<style scoped lang="scss">
.page-container {
    width: 100%;
    min-height: 575px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
}
</style>
