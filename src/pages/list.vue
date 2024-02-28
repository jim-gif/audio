<template>
  <!--歌曲列表-->
  <div class="music-list">
    <div class="list-item list-header">
      <span class="list-name">语录</span>
      <span class="list-artist">角色</span>
      <span class="list-time">时长</span>
    </div>
    <div class="list-content">
      <el-scrollbar height="600px">
        <div class="list-item" v-for="item in list">
          <span class="list-num">{{ item.id }}</span>
          <div class="list-name">
            <span>{{ item.name }}</span>
          </div>
          <span class="list-artist">{{ item.artist }}</span>
          <span class="list-time">{{ item.time }}</span>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
  
<script>
export default {
  name: '"musicList',
  data() {
    return {
      list: [
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        {id: 1, name: '萨法我是个特卫生日热热热热热啊啊啊额啊是啊', artist: '德玛西亚', time: '12:00'},
        
      ],
    }
  },

}
</script>
  
<style lang="less" scoped>
.music-list {
  height: 100%;
}

.list-header {
  border-bottom: 1px solid rgba(0,0,0,0,0.4);

  .list-name {
    padding-left: 40px;
    user-select: none;
  }
}

.list-content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.list-no {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.list-item {
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(253,253,253,0.6);
  line-height: 50px;
  overflow: hidden;

  &.list-item-no {
    justify-content: center;
    align-items: center;
  }

  &.on {
    color: #fff;

    .list-num {
      font-size: 0;
      background: url('../assets/img/wave.gif') no-repeat center center;
    }
  }


  .list-num {
    display: block;
    width: 30px;
    margin-right: 10px;
    text-align: center;
  }

  .list-name {
    position: relative;
    flex: 1;
    box-sizing: border-box;

    & > span {
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    small {
      margin-left: 5px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }

    /*hover菜单*/

    .list-menu {
      display: none;
      position: absolute;
      top: 50%;
      right: 10px;
      height: 40px;
      font-size: 0;
      transform: translateY(-50%);
    }
  }

  .list-artist,
  .list-album {
    display: block;
    width: 300px;
  }

  .list-time {
    display: block;
    width: 60px;
    position: relative;

    .list-menu-icon-del {
      display: none;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}

.list-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  span {
    padding: 5px 20px;
    cursor: pointer;
    user-select: none;
  }
}
</style>