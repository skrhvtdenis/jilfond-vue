<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import UserItem from './UserItem.vue';
import { debounce, createSearchQuery } from '../helpers/helpers.js';

const store = useStore();

const usersList = computed(() => store.state.usersList);

const handleUserSelect = (id) => {
    store.dispatch('getUserCard', id);
};

const searchQuery = computed(() => store.state.searchQuery);
const isListLoading = computed(() => store.state.isListLoading);
const listError = computed(() => store.state.listError);

// TODO: вынести в хелпер преобразование строки
const handleInput = (e) => {
    const searchQuery = createSearchQuery(e.target.value.split(','));

    store.dispatch('getUsersByUsername', searchQuery);
    store.commit('changeSearchQuery', e.target.value);
};

const debouncedInputHandler = debounce(handleInput, 500);
</script>

<template>
    <div class="sidebar">
        <div class="input-container">
            <label for="search">Поиск сотрудников</label>
            <input
                :value="searchQuery"
                @input="(e) => debouncedInputHandler(e)"
                id="search"
                type="text"
                placeholder="Введите Id или имя "
            />
        </div>
        <p>Результаты</p>
        <div v-if="searchQuery !== ''" class="users-list">
            <div v-if="isListLoading" class="loader-container">
                <span class="loader"></span>
            </div>

            <UserItem
                v-for="user in usersList"
                :id="user.id"
                :name="user.name"
                :email="user.email"
                @click="handleUserSelect(user.id)"
            />
            <div v-if="usersList.length === 0 && !listError">
                Пользователей с таким username не найдено
            </div>
            <div class="error-message" v-if="listError">
                <p>{{ listError }}</p>
            </div>
        </div>
        <div v-else><span>Начните поиск</span></div>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    flex: 0 0 auto;
    border-right: 1px solid #dededd;
    width: 300px;
    padding: 30px 20px;

    .input-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;

        label {
            font-weight: 600;
        }

        input {
            padding: 16px 24px;
            font-size: 14px;
            color: #76787d;
            border: 1px solid #e9ecef;
            border-radius: 8px;
        }
    }

    p {
        font-weight: 600;
        margin-bottom: 16px;
    }

    span {
        font-size: 14px;
    }

    @media screen and (max-width: 768px) {
        border-right: none;
        width: 100%;
    }

    .error-message {
        color: #e31f24;
    }
}

.users-list {
    max-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
}
</style>
