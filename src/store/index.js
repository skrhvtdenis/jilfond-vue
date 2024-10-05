import { createStore } from 'vuex';
import UserService from '../api/UserService';

export default createStore({
    state() {
        return {
            searchQuery: '',
            usersList: [],
            selectedUserId: null,
            selectedUser: {},
            isCardLoading: false,
            isListLoading: false,
            listError: null,
            cardError: null,
        };
    },
    getters: {},
    mutations: {
        changeSelectedUser(state, user) {
            Object.assign(state.selectedUser, user);
        },
        clearSelectedUser(state) {
            state.selectedUser = {};
        },
        changeSearchQuery(state, query) {
            state.searchQuery = query;
        },
        changeUsersList(state, usersList) {
            state.usersList = usersList;
        },
        setListError(state, error) {
            state.listError = error;
        },
        setCardError(state, error) {
            state.cardError = error;
        },
    },
    actions: {
        async getUsersByUsername({ commit, state }, searchQuery) {
            try {
                commit('setListError', null);
                state.isListLoading = true;
                const response = await UserService.getUsersByUsername(
                    searchQuery
                );

                commit('clearSelectedUser');
                commit('changeUsersList', response.data);
            } catch (e) {
                console.log(e);
                commit('setListError', e.message);
            } finally {
                state.isListLoading = false;
            }
        },

        async getUserCard({ commit, state }, id) {
            try {
                commit('setCardError', null);
                state.isCardLoading = true;
                const response = await UserService.getUserById(id);
                commit('changeSelectedUser', response.data);
            } catch (e) {
                console.log(e);
                commit('setCardError', e.message);
            } finally {
                state.isCardLoading = false;
            }
        },
    },
});
