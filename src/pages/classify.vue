<template>
    <div class="main">
        <el-scrollbar>
            <div class="list">
                <h4 class="second-title">影视</h4>
                <div class="demo-image" style="display: flex; flex-wrap: wrap;">
                    <div class="block" v-for="fit in fits" :key="fit">
                        <router-link :to="{ path: `/home/details` }" tag="div" class="topList-item">
                            <el-image style="width: 100px; height: 100px; display: block" src="url" :fit="fit" />
                        <span class="demonstration">{{ fit }}</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fits: ['fill', 'contain', 'cover', 'none', 'none', 'scale-down','fill', 'contain', 'cover', 'none'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    margin-top: 30px;

    .list {
        h4 {
            font-size: 16px;
            text-align: left;
        }

        .demo-image {

            .block {
                padding: 20px 30px;
                display: block;

                .topList-item {
                    width: 130px;
      text-align: center;
      cursor: pointer;
      margin: 0 auto 20px;
      .demonstration {
                    width: 100px;
                    display: block;
                    font-size: 14px;
                    margin: 10px 0 20px 0;
                }
                }
            }

        }
    }

}
</style>