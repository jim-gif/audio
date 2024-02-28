<template>
  <div class="music-bar">
    <div class="music-bar-btns">
      <mm-icon class="pointer" type="prev" size="36" title="上一曲 Ctrl + Left"  />
      <div class="control-play pointer" title="播放暂停 Ctrl + Space" >
        <mm-icon size="24" />
      </div>
      <mm-icon class="pointer" type="next" size="36" title="下一曲 Ctrl + Right"  />
    </div>
    <div class="music-music">
      <div class="music-music">
        <div class="music-bar-info">
          <template>
            <!-- {{ currentMusic.name }} -->
            <span>-</span>
          </template>
        </div>
        <div class="music-bar-time">
          <!-- {{ currentTime | format }}/{{ currentMusic.duration % 3600 | format }} -->
        </div>
        <mm-progress
          class="music-progress"
        />
      </div>
    </div>
    <!-- 音量控制 -->
    <div class="music-bar-volume">
      <volume />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Music',
 
}
</script>


<style lang="less" scoped>
.music-bar {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  color: #fff;

  &.disable {
    pointer-events: none;
    opacity: 0.6;
  }

  .icon-color {
    color: #fff;
  }

  .music-bar-btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;

    .control-play {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      color: #fff;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .btn-prev {
    width: 19px;
    min-width: 19px;
    height: 20px;
    background-position: 0 -30px;
  }

  .btn-play {
    width: 21px;
    min-width: 21px;
    height: 29px;
    margin: 0 50px;
    background-position: 0 0;

    &.btn-play-pause {
      background-position: -30px 0;
    }
  }

  .btn-next {
    width: 19px;
    min-width: 19px;
    height: 20px;
    background-position: 0 -52px;
  }

  .music-music {
    position: relative;
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    padding-left: 40px;

    .music-bar-info {
      height: 15px;
      padding-right: 80px;
      line-height: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .music-bar-time {
      position: absolute;
      top: 0;
      right: 5px;
    }
  }

  .mode,
  .comment,
  .music-bar-volume {
    margin-left: 20px;
  }

  .volume-wrapper {
    margin-left: 20px;
    width: 150px;
  }
}</style>