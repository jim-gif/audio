<template>
  <div>
    <!--封面-->
    <dl class="music-info">
      <dt>
        <img src="../assets/img/player_cover.png" />
      </dt>
      <template style="display:block">
        <dd>离线音频播放器</dd>
      </template>
    </dl>
    <!--歌词-->
    <div ref="musicLyric" class="music-lyric">
      <div class="music-lyric-items">
        <template>
          <p>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lyric',
}
</script>

<style lang="less" scoped>
.music-info {
  padding-bottom: 20px;
  text-align: center;
  dt {
    position: relative;
    width: 186px;
    height: 186px;
    margin: 0 auto 15px;
    &:after {
      content: '';
      position: absolute;
      left: 9px;
      top: 0;
      width: 201px;
      height: 180px;
      background: url('../assets/img/album_cover_player.png') 0 0 no-repeat;
    }
    img {
      vertical-align: middle;
      width: 186px;
      height: 186px;
    }
  }
  dd {
    height: 30px;
    line-height: 30px;
    
  }
}

/*歌词部分*/
.music-lyric {
  position: absolute;
  top: 315px;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  text-align: center;
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.6) 15%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.6) 85%,
    rgba(255, 255, 255, 0) 100%
  );
  .music-lyric-items {
    text-align: center;
    line-height: 34px;
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s ease-out;
  }
}

// 当屏幕小于 960 时
@media (max-width: 960px) {
  .music-info {
    display: none;
  }
  .music-lyric {
    top: 0;
  }
}
</style>
