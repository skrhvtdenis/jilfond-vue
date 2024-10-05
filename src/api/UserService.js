import axios from 'axios';

export default class UserService {
    static async getUsersByUsername(searchQuery) {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users?${searchQuery}`
        );
        return response;
    }

    static async getUserById(id) {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        return response;
    }
}
