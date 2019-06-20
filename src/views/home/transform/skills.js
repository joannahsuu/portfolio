import sid from 'shortid'

const SKILLS = [
  {
    key: sid.generate(),
    title: '網頁開發',
    subtitle: 'Web Development',
    icon: 'icon-web-development',
    description: [
      'HTML/CSS/JavaScript',
      'CSS3 + Sass 規劃響應式頁面',
      'jQuery 搭配第三方套件實作動畫效果',
      '使用 ajax 和 API 串接後將資料視覺化',
    ],
  },
  {
    key: sid.generate(),
    title: '工具',
    subtitle: 'Tools',
    icon: 'icon-tools',
    description: [
      '使用 git 作專案的版本控制，搭配 git flow 幫助團隊協作分工',
      '使用 jenkins 部署專案',
      '使用 postman 測試 API',
      '架設 JSON server 來模擬 REST api',
    ],
  },
  {
    key: sid.generate(),
    title: '框架',
    subtitle: 'Frameworks',
    icon: 'icon-framework',
    description: [
      '使用 Vuejs 開發頁面',
      '使用 npm / yarn 管理套件',
      'Vuejs 專案搭配 vuex來管理專案共用的資料及狀態',
      '使用 nodejs 建置 line-bot',
    ],
  },
]

export default SKILLS
