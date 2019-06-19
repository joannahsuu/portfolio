<template lang="pug">
  .work__box
    p hi
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
    &:hover
      background: $white
      color: $black
</style>
