<script setup>
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="userItem">
        <div>
            <img
                width="70"
                height="70"
                src="../../public/img-placeholder.png"
                alt="user-placeholder"
            />
        </div>
        <div class="userInfo">
            <p class="userName">{{ props.name }}</p>
            <p class="userEmail">{{ props.email }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.userItem {
    display: flex;
    flex-direction: row;
    box-shadow: 0px 0px 10px 0px #0000001a;
    border-radius: 10px;

    .userInfo {
        padding: 16px;
        border-radius: 0px 10px 10px 0px;
        width: 100%;
        font-size: 14px;

        .userName {
            font-weight: 600;
        }
    }

    &:hover {
        cursor: pointer;
        .userInfo {
            background-color: #e0e0e0;
        }
    }
}
</style>
