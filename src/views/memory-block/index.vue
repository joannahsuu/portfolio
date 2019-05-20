<template lang="pug">
  .memory-block__container
    .infos
      h2 ## 4
      h1 Memory<br>Blocks
      h3.levels --
    .blocks
      .row
        .block.block1 1
        .block.block2 2
      .row
        .block.block3 3
        .block.block4 4
      .row
        .inputStatus
</template>

<style lang="sass">
$colorRed: #ff5353
$colorYellow: #ffc429
$colorBlue: #5980c1
$colorWhite: #fbe9b7

@mixin size($w, $h:$w)
  width: $w
  height: $h

@mixin flexCenter
  display: flex
  align-items: center
  justify-content: center
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900')

.memory-block
  &__container
    font-family: 'roboto'
    background-color: #232526
    color: white
    +size(100%)
    +flexCenter
    margin: 0
    .infos
      position: absolute
      top: 40px
      left: 40px
      h1
        font-size: 40px
        margin-top: 0
        margin-bottom: 0
        line-height: 1.2
        letter-spacing: 1px
      h3
        font-weight: 500
        color: $colorRed
    .blocks
      color: white
      .row
        display: flex
      .block
        +size(100px)
        +flexCenter
        margin: 12px
        border: 1px solid
        transition: 0.5s 0.2s

        @mixin setBlockColor($color)
          box-shadow: 0px 0px 35px rgba($color, 0.2)
          border: 1px solid lighten($color, 5)
          background-color: transparent
          &:hover
            background-color: rgba($color, 0.3)
          &:active
            background-color: $color
            box-shadow: 0px 0px 35px rgba($color, 0.2)
        &:active
          transition: 0s
          background-color: #fff

          box-shadow: 0px 0px 35px rgba($colorRed, 0.2)
        &.block1
          +setBlockColor($colorRed)
        &.block2
          +setBlockColor($colorYellow)
        &.block3
          +setBlockColor($colorBlue)
        &.block4
          +setBlockColor($colorWhite)

</style>
