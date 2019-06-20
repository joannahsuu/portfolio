<template lang="pug">
  .skills__box
    p
      icon.icon__skill(:name="data.icon")
    h4 {{ data.title }}
    h5 {{ data.subtitle }}
    ul
      li(v-for="desc in data.description") {{ desc }}
    //- p(v-for="desc in data.description") {{ desc }}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>


<style lang="sass">
$light-color: #fb594d

.skills
  &__box
    +flex(center, center, column)
    margin: rem(5px 20px)
    +size(rem(350px), rem(400px))
    background: $white
    box-shadow: 0 40px 50px 0 rgba(38,38,38,0.2)
    transition: transform .3s ease-in-out,box-shadow .3s ease-in-out
    h5
      color: #808080
      margin-top: rem(5px)
    ul
      padding: rem(10px)
    &:hover
      transform: translateY(-8px)
      box-shadow: 0 40px 60px 0 rgba(38,38,38,0.4)

.icon
  &__skill
    +size(rem(80px), rem(80px))
    color: $light-color
</style>
