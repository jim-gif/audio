<template>
    <div class="nav">
        <router-link to="/home/classify">
            <el-button type="info">分类</el-button>
        </router-link>
        <router-link to="/home/search">
            <el-button type="info">搜索</el-button>
        </router-link>
        <router-link to="/home/playList">
            <el-button type="info">正在播放</el-button>
        </router-link>
    </div>
</template>


<style lang="less" scoped>
.nav {
    display: flex;
    justify-content: flex-start;
    .el-button {
        margin-right: 20px;
    }
}
</style>