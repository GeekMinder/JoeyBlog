<template>
    <div id="app-container">
        <Layout>
            <template #left>
                <div class="personal-profile">
                    <PersonalProfileContainer/>
                </div>
            </template>
            <template #right>
                <RouterView />
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout/index.vue";
import PersonalProfileContainer from "@/components/PersonalProfile/index.vue";

export default {
    components: {
        Layout,
        PersonalProfileContainer,
    },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";

#app-container {
    .self-fill(fixed);
}

.personal-profile {
    //width: 500px;
    height: 100%;
}
</style>
