<!-- icon 组件 -->
<template>
  <i
    @click="onClick"
    :class="['iconfont', getIconCls()]"
    :style="getIconStyle()"
  ></i>
</template>


<script>
export default {
  name: 'MmIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
  },
  methods: {
    getIconCls() {
      return `icon-${this.type}`
    },
    getIconStyle() {
      return { fontSize: this.size + 'px' }
    },
    onClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="less">
.iconfont {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  vertical-align: baseline;
  text-transform: none;
  speak: none;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
