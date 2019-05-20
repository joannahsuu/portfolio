<template lang="pug">
.home__container
  nav.navbar
    .navbar__logo
      //- img.navbar__meow(:src="logo")
    .navbar__items.desktop
      p.navbar__item box1
      p.navbar__item(@click="scrollToBox") box2
      p.navbar__item box3
    .navbar__items.mobile
      p hi
  //- top
  .parallax__box1(:style="boxStyle")
    .main-content
      h1 HI! I AM Joanna HSU
      hr
      p Front End Developer
      .mouse__icon
        .wheel
  //- about
  .parallax__box2
    header
      h1.box2__header ABOUT ME
    main
      p.box2__content 樂於學習新事物，在學習的過程中總會面對困境或是挫折，我相信過程中所經歷的，都會是使人成長的養分。
      p.box2__content 喜歡觀察生活中的大小人事物，將所觀察到的應用於開發上，開發出不單單只提供基本功能而更加強於用戶體驗流程。
  .parallax__box3
    p skills
  .parallax__box4
    p hello4
</template>

<script>
import box1 from '@/assets/images/common/bg_main.jpeg'
import logo from '@/assets/images/common/profile_meow.svg'

export default {
  name: 'home',
  data() {
    return {
      page: 'HOME',
      box1,
      logo,
    }
  },
  computed: {
    boxStyle() {
      return {
        backgroundImage: `url(${this.box1})`,
      }
    },
    box1Position() {
      const box = document.querySelector('.parallax__box1')
      if (box) {
        return box.offsetTop
      }
      return 0
    },
    box2Position() {
      const box = document.querySelector('.parallax__box2')
      if (box) {
        return box.offsetTop
      }
      return 0
    },
    box3Position() {
      const box = document.querySelector('.parallax__box3')
      if (box) {
        return box.offsetTop
      }
      return 0
    },
  },
  methods: {
    scrollToBox(el) {
      console.log('scrollToBox', el)
      // console.log('scrollToBox', this.box2Position)
      const ele = document.querySelector('.home__container')
      this.$nextTick(() => {
        ele.scrollTop = this.box2Position - 80
      })
    },
  },
}
</script>

<style lang="sass">
$fill-color: #dedede
$light-color: #fb594d

.home
  &__container
    +size(100%)
    +ta
    overflow-y: scroll

// navbar
.navbar
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 10
  background-color: rgba(0, 0, 0, 0.8)
  color: $white
  transition: background ease-in-out .2s
  +flex(flex-start, flex-start, row)
  +size(100%, rem(80px))
  &__logo
    +size(40%, 100%)
    +flex(center, flex-start)
  &__meow
    +size(rem(45px))
    margin: rem(0 20px)
  &__items
    +size(60%, 100%)
    +flex(center, flex-end, row)
  &__item
    width: rem(25%)

.mobile
  display: none

// 區塊
.parallax
  &__box1
    +size(100%, 100vh)
    +flex(center, center, column)
    background-size: cover
    background-attachment: fixed
    background-position: center center
    .main-content
      color: $white
      h1
        font-size: rem(60px)
        letter-spacing: rem(2px)
      hr
        border: 0
        +size(rem(50px), rem(4px))
        // height: 4px
        background-color: #fb594d
        // width: 50px
        margin: rem(30px auto)
      p
        font-size: rem(18px)
        letter-spacing: rem(2px)
      .mouse__icon
        position: absolute
        left: 50%
        bottom: 40px
        border: rem(3px) solid #fff
        border-radius: rem(20px)
        +size(30px, 40px)
        margin-left: -15px
        display: block
        z-index: 10
        opacity: 0.7
        .wheel
          position: relative
          border-radius: rem(10px)
          background: #fff
          +size(rem(4px), 6px)
          top: 4px
          margin-left: auto
          margin-right: auto
          animation: drop 1s linear 0s infinite
          // animation-name: drop
          // animation-duration: 1s
          // animation-timing-function: linear
          // animation-delay: 0s
          // animation-iteration-count: infinite
          // animation-play-state: running
  &__box2
    +flex(center, center, column)
    // height: calc(100vh - 5rem)
    width: 100%
    height: 60vh
    background-color: $white
    // background-image: url(http://farm7.static.flickr.com/6135/5936831942_cbd5f9ce0e_b.jpg)
    // background-size: cover
    // display: table
    background-attachment: fixed
    // *
    border: 1px solid black
    header
      +flex(center, center, column)
      width: 100%
      flex: 1
    main
      flex: 4
      width: 100%
  &__box3
    height: calc(100vh - 5rem)
    width: 100%
    background-color: $light-color
    background-attachment: fixed
  &__box4
    height: calc(100vh - 5rem)
    width: 100%
    background-color: $white
    background-attachment: fixed

.box2
  &__header
    font-size: rem(24px)
    position: relative
    &:before, &:after
      position: absolute
      content: ''
      width: 60%
      height: rem(3px)
      background: $fill-color
      border-radius: 100rem
    &:before
      top: 0
      right: rem(-8px)
    &:after
      bottom: 0
      left: rem(-8px)
  &__content
    padding: rem(10px 80px)
    font-size: rem(16px)

@keyframes drop
  0%
    top: 5px
    opacity: 0
  30%
    top: 10px
    opacity: 1
  100%
    top: 25px
    opacity: 0

// 平板大小以下
@media screen and (max-width:768px)
  .desktop
    display: none
  .mobile
    display: block
  // .navbar
  //   &__items
  //     display: none
  //   &-small__items
  //     display: block
    //   +size(60%, 100%)
    //   +flex(center, flex-end, row)
    // &__item
    //   width: rem(25%)

</style>
