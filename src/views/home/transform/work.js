import sid from 'shortid'
import todoList from '@/assets/images/work/todo-list.png'
import station from '@/assets/images/work/station.png'
import linebot from '@/assets/images/work/line-bot.jpeg'
import grabngo from '@/assets/images/work/GranNGo_main.jpeg'

const WORKS = [
  {
    key: sid.generate(),
    type: 'WEBSITE',
    name: 'todo list',
    cover: todoList,
    github: 'https://github.com/joannahsuu/todo-list',
  },
  {
    key: sid.generate(),
    type: 'WEBSITE',
    name: 'gogoro 換電站資訊',
    cover: station,
    github: 'https://github.com/joannahsuu/stations-map',
  },
  {
    key: sid.generate(),
    type: 'LINT - BOT',
    name: 'line 聊天機器人',
    cover: linebot,
    github: 'https://github.com/joannahsuu/line-bot-webhook',
  },
  {
    key: sid.generate(),
    type: '北科大專題製作',
    name: 'Grab and Go 線上線上訂餐',
    cover: grabngo,
    github: 'https://github.com/Jessie75919/Grab-n-Go',
  },
]

export default WORKS
