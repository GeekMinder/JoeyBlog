<template>
    <ul class="level-list-container">
        <li v-for="(item, i) in list" :key="i">
            <span
                :class="{ active: item.isSelect }"
                @click="handleSelect(item)"
            >
                {{ item.name }}
            </span>
            <span
                v-if="item.aside"
                class="aside"
                @click="handleClick(item)"
                :class="{ active: item.isSelect }"
                >{{ item.aside }}
            </span>
            <LevelList :list="item.children" @select="handleSelect" />
        </li>
    </ul>
</template>

<script>
export default {
    name: "LevelList",
    props: {
        // props验证
        list: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        handleSelect(item) {
            if (!item.isSelect) {
                this.$emit("select", item);
            }
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.level-list-container {
    list-style: none;
    padding: 0;
    .level-list-container {
        margin-left: 1em;
    }
    li {
        min-height: 1.2em;
        line-height: 2em;
        font-size: 1em;
        cursor: pointer;
        .active {
            color: @warn;
            font-weight: bold;
        }
    }
}
.aside {
    font-size: 12px;
    margin-left: 1em;
    color: @grey;
}
</style>
