<template>
    <div>
        <Pager
            :total="total"
            :current="current"
            @pageChange="handlePageChange($event)"
        />
    </div>
</template>

<script>
import Pager from "./";
export default {
    components: {
        Pager,
    },
    data() {
        return {
            current: 5,
            total: 51,
        };
    },
    methods: {
        handlePageChange(newPage) {
            this.current = newPage;
            console.log("加载当前页数据");
        },
    },
};
</script>

<style scoped></style>
