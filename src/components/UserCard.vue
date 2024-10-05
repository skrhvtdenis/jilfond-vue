<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.state.selectedUser);
const isCardLoading = computed(() => store.state.isCardLoading);
const cardError = computed(() => store.state.cardError);
</script>

<template>
    <div class="card-container">
        <div v-if="user.id" class="user-card">
            <img
                src="../../public/userCard-placeholder.png"
                alt="user-placeholder"
            />
            <div class="user-info">
                <h3>{{ user.name }}</h3>
                <p><span>email:</span> {{ user.email }}</p>
                <p><span>phone</span>: {{ user.phone }}</p>
                <p>
                    <span>О себе:</span>
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

        <div v-else-if="isCardLoading" class="loader-container">
            <span class="loader"></span>
        </div>

        <div class="empty-card red" v-else-if="cardError">
            <p>{{ cardError }}</p>
        </div>

        <div class="empty-card" v-else>
            Выберите сотрудника, чтобы посмотреть его профиль
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    width: 100%;
}

.user-card {
    padding: 20px 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    gap: 16px;
    font-size: 14px;
    img {
        max-width: 420px;
        width: 100%;
        height: auto;
    }

    .user-info {
        max-width: 440px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
            font-weight: 600;
        }
    }
}

.empty-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.red {
        color: #e31f24;
        font-weight: bold;
    }
}

.loader-container {
    width: 100%;
    height: 100%;
}
</style>
