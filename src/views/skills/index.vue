<template lang="pug">
  .skills__box
    p
      icon.icon__skill(name="icon-web-development")
    h4 網頁開發
    p xxx
</template>

<style lang="sass">
.skills
  &__box
    +flex(center, center, column)
    border: 1px solid
    margin: rem(0px 20px)
    +size(rem(350px), rem(400px))
    background: $white

.icon
  &__skill
    +size(rem(80px), rem(80px))
</style>
