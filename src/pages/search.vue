<template>
    <!--搜索-->
    <div class="search">
        <div class="search-head">
            <input class="search-input" type="text" placeholder="音乐/歌手" />
        </div>
        <div class="flex-1 overflow-hidden">
            
        </div>
    </div>
</template>
  
<script>

</script>
  
<style lang="less" scoped>
.search {
    margin-top: 30px;
    overflow: hidden;

    .search-head {
        display: flex;
        height: 40px;
        padding: 10px 15px;
        overflow: hidden;

        .search-input {
            flex: 1;
            height: 40px;
            box-sizing: border-box;
            padding: 0 15px;
            border: 1px solid rgba(0, 0, 0, 0.4);
            outline: 0;
            background: transparent;
            box-shadow: 0 0 1px 0 #fff inset;

            &::placeholder {
                color: #ccc;
            }
        }
    }
}
</style>