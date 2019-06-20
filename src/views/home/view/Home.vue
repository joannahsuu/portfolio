<template lang="pug">
.home__container
  nav.navbar
    .navbar__logo
      icon.icon__logo(name="icon-logo")
    .navbar__items.desktop
      p.navbar__item(@click="scrollTo('ABOUT')") ABOUT
      p.navbar__item(@click="scrollTo('SKILLS')") SKILLS
      p.navbar__item(@click="scrollTo('WORK')") WORK
      p.navbar__item(@click="scrollTo('CONTACT')") CONTACT
    .navbar__items.mobile
      //- p hi
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
      .box2__content.aboutmeimg(:style="aboutmebg")
      .box2__content
        p 樂於學習新事物，在學習的過程中總會面對困境或是挫折，我相信過程中所經歷的，都會是使人成長的養分。
        p 喜歡觀察生活中的大小人事物，將所觀察到的應用於開發上，開發出不單單只提供基本功能而更加強於用戶體驗流程。
        p
         button.box2__btn.resume RESUME
         button.box2__btn.github(@click="goGithub")
          icon.icon__git(name="icon-github")
          span GITHUB
  .parallax__box3
    header
      h1.box3__header SKILLS
    main
      skill-box(
        v-for="skill in skills"
        :key="skill.key"
        :data="skill")
  .parallax__box4
    header
      h1.box4__header WORK
    main
      //- work-box
      work-box(
        v-for="work in works"
        :key="work.key"
        :data="work"
        @on-item-click="onWorkItem")
  .parallax__box5
    header
      h1.box5__header CONTACT
    main
      .box5__content
        p
          icon.icon__email(name="icon-email")
          span joannahsuu@gmail.com
        p
          icon.icon__github__fill(
            name="icon-github-fill"
            @click.native="goGithub")
          icon.icon__linkedin(name="icon-linkedin")
    footer © 2019 all rights reserved.
</template>

<script>
import box1 from '@/assets/images/common/bg_main.jpeg'
import aboutme from '@/assets/images/common/aboutme.jpg'
import contact from '@/assets/images/common/contact.jpg'
import skillBox from '../components/skills'
import workBox from '../components/work'
import { SKILLS, WORKS } from '../transform'

const areas = [
  {
    name: 'TOP',
    selector: '.parallax__box1',
  },
  {
    name: 'ABOUT',
    selector: '.parallax__box2',
  },
  {
    name: 'SKILLS',
    selector: '.parallax__box3',
  },
  {
    name: 'WORK',
    selector: '.parallax__box4',
  },
  {
    name: 'CONTACT',
    selector: '.parallax__box5',
  },
]


export default {
  name: 'home',
  components: {
    skillBox,
    workBox,
  },
  data() {
    return {
      page: 'HOME',
      box1,
      aboutme,
      contact,
      skills: SKILLS,
      works: WORKS,
    }
  },
  computed: {
    boxStyle() {
      return {
        backgroundImage: `url(${this.box1})`,
      }
    },
    aboutmebg() {
      return {
        backgroundImage: `url(${this.aboutme})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    },
    contactbg() {
      return {
        backgroundImage: `url(${this.contact})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    },
  },
  methods: {
    scrollTo(target) {
      const idx = areas.findIndex(area => area.name === target)
      console.log('scrollTo', idx)
      if (idx) {
        const ele = document.querySelector('.home__container')
        const box = document.querySelector(areas[idx].selector)
        this.$nextTick(() => {
          ele.scrollTop = box.offsetTop - 80
        })
      }
    },
    /**
     * 點擊 work item
     */
    onWorkItem(data) {
      const { github } = data
      window.open(github)
    },
    goGithub() {
      window.open('https://github.com/joannahsuu?tab=repositories')
    },
  },
}
</script>

<style lang="sass">
$fill-color: #dedede
$light-color: #fb594d
$mild-color: #f6f7f2

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
    width: rem(20%)
    height: 100%
    line-height: 5rem
    transition: all .3s ease-out
    &:hover
      background: #909090

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
    text-align: left
    header
      +flex(center, center, column)
      width: 100%
      flex: 1
    main
      flex: 4
      width: 100%
      +flex
  &__box3
    +flex(center, center, column)
    // height: calc(100vh - 5rem)
    height: 80vh
    width: 100%
    background-color: $mild-color
    background-attachment: fixed
    header
      +flex(center, center, column)
      width: 100%
      flex: 1
    main
      flex: 4
      width: 100%
      +flex(center, center, row)
      padding: rem(20px 10px)
  &__box4
    +flex(center, center, column)
    // height: calc(100vh - 5rem)
    height: auto
    width: 100%
    background-color: $white
    background-attachment: fixed
    header
      +flex(center, center, column)
      width: 100%
      h1
        margin: rem(30px 0)
      // flex: 1
    main
      +flex(flex-start, flex-start, row)
      // flex: 4
      flex-wrap: wrap
      width: 100%
      padding: rem(20px calc((100% - 960px) /3))
  &__box5
    +flex(center, center, column)
    height: 50vh
    width: 100%
    background-color: $mild-color
    background-attachment: fixed
    header
      +flex(center, center, column)
      width: 100%
      flex: 1
    main
      flex: 3
      width: 100%
      +flex

.box2, .box3, .box4, .box5
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
    font-size: rem(16px)
    flex: 1
    margin: rem(5px)
    p
      padding: rem(10px 40px)
      +flex
  &__btn
    +size(rem(100px), rem(40px))
    +flex(center, center, row)
    margin-right: rem(10px)
    transition: all .3s ease-out
    letter-spacing: 1px
    font-weight: 500
    &.resume
      +button(rem(100px), rem(40px), $white, #323234)
      &:hover
        +size(rem(100px), rem(40px))
        background: #9e9e9e
    &.github
      +button(rem(100px), rem(40px), #323234, $white)
      border: 2px solid #323234
      &:hover
        +button(rem(100px), rem(40px), $white, #9e9e9e)
        border: 0

.box3, .box5
  &__header
    &:before, &:after
      background: $light-color

.box5
  &__content
    p
      +flex(center, center, row)
      span
        letter-spacing: 1px

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

.icon
  &__git, &__email, &__github__fill, &__linkedin, &__logo
    margin: rem(0 5px)
  &__email, &__github__fill, &__linkedin
    +size(rem(30px))
  &__logo
    +size(rem(50px))

footer
  color: #83838F
  font-size: rem(14px)
  letter-spacing: 1px
  margin: rem(5px 0)

// 平板大小以下
@media screen and (max-width:768px)
  .desktop
    display: none
  // .mobile
    display: block
  .aboutmeimg
    display: none
  .parallax
    &__box3
      height: auto
      header
        margin: rem(20px 0 0)
      main
        flex-wrap: wrap
  .navbar
    &__logo
      +size(100%)
      +flex(center, center)
</style>
