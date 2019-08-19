import Menu from './menu'
import User from './user'
import Message from './message'
import Search from './search'
import Config from '../config'

export default {
    containerId: 'commonHeadNav',
    initContainer: function () {
        let currentDom = document.currentScript
        let pnode = document.currentScript.parentNode
        let baseSrc = document.currentScript.src.replace('/index.js', '')
        // 引入css
        let cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.type = 'text/css'
        cssLink.href = baseSrc + '/index.css'
        pnode.insertBefore(cssLink, currentDom)
        let logo = document.createElement('div')
        logo.innerHTML = ''
        logo.addEventListener('click', function () {
            window.location.href = Config.domain.auth.fe + '/#/'
        })
        let container = document.createElement('div')
        container.id = this.containerId
        container.className = 'common-head-nav'
        container.innerHTML = '<div id="commonHeadLogo"><a href="/">数据中台</a></div><ul id="commonHeadMenu"></ul><div id="commonHeadSearchContainer"><div id="commonHeadSearch"></div></div><div id="commonHeadMessage"></div><div id="commonHeadUser"></div><div id="aboutme"><a href="/#/about-me">关于我</a></div>'
        pnode.insertBefore(container, currentDom)
    },
    init: function () {
        this.initContainer()
        Menu.init()
        Search.init()
        Message.init()
        User.init()
    },
    show: function () {
        document.getElementById(this.containerId).style.display = 'inline-flex'
    },
    hide: function () {
        document.getElementById(this.containerId).style.display = 'none'
    }
}