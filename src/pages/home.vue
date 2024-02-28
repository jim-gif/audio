<template>
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="center">
                        <btn />
                        <router-view :key="$route.path" class="router-view" />
                    </div>
                </el-col>
                 <el-col :span="8">
                    <lyric />
                </el-col>
            </el-row>
        </el-main>
        <el-footer>
            <audio src="" controls></audio>
        </el-footer>
    </el-container>
</template>

<script>
import lyric from '../components/lyric.vue'
import play from '../components/play.vue'
import btn from '../components/btn.vue'
import classify from '../pages/classify.vue'
export default {
    components: {
        lyric,
        play,
        btn,
        classify
    },
}
</script>

<style lang="less">
.el-container {

    .el-header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .el-footer {
        width: 100%;
        height: 104px;
        position: absolute;
        bottom: 2%;
        audio {
            width: 90%;
            height: 80px;
            padding: 10px;
        }
    }

}
</style>