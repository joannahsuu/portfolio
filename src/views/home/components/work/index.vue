<template lang="pug">
  .work__box(@click="$emit('on-item-click', data)")
    .work__desc
      h4 {{ data.type }}
      p {{ data.name }}
    .work__cover(:style="workBg")
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
  computed: {
    workBg() {
      return {
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundImage: `url(${this.data.cover})`,
      }
    },
  },
}
</script>

<style lang="sass">
.work
  &__box
    margin: rem(10px)
    +size(rem(calc((100% - 60px) / 3)), rem(200px))
    transition: all 0.25s ease-in-out
    position: relative
  &__cover
    +size(100%)
  &__desc
    background: rgba(255, 255, 255, 0.8)
    position: absolute
    +size(100%)
    opacity: 0
    transition: all ease .5s
    color: #262626
    +flex(center, center, column)
    p
      margin: rem(5px)
    &:hover
      opacity: 1
</style>
