<template lang="pug">
  .work__box
    .title hi
    img.cover(:src="work")
</template>

<script>
import work from '@/assets/images/work/work_1.png'

export default {
  data() {
    return {
      work,
    }
  },
  computed: {
    workBg() {
      return {
        backgroundImage: `url(${this.work})`,
      }
    },
  },
}
</script>


<style lang="sass">
.work
  &__box
    border: 1px solid
    margin: rem(10px)
    +size(rem(calc((100% - 60px) / 3)), rem(200px))
    background: yellow
    transition: all 0.25s ease-in-out
    position: relative
    .cover
      width: 100%
      height: 100%
      // +size(rem(calc((100% - 60px) / 3)), rem(200px))
    .title
      background: rgba(255,255,255,.7)
      // background: rgba(0,255,255,.7)
      position: absolute
      width: 100%
      height: 100%
      // +size(rem(calc((100% - 60px) / 3)), rem(200px))
      opacity: 0
      transition: all ease .5s
      color: #262626
      &:hover
        opacity: 1
    // &:hover
    //   background: $white
    //   color: $black
</style>
