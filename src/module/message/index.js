import Config from '../../config'
import {getLingDangData} from './api'

export default {
    init: function () {
        console.log('init message ...')
        let msg = document.getElementById('commonHeadMessage')
        let icon = document.createElement('div')
        icon.className = 'common-head-msg-icon'
        icon.addEventListener('click', function () {
            window.location.href = Config.domain.message.fe + '/#/message'
        })
        msg.appendChild(icon)
        getLingDangData().then(res => {
            if (res.code === 0 && res.data.unReadCount > 0) {
                let msgCount = document.createElement('span')
                msgCount.className = 'common-head-msg-count'
                msgCount.innerText = res.data.unReadCount
                msg.appendChild(msgCount)
                let triangle = document.createElement("div")
                triangle.className = 'common-head-triangle'
                msg.appendChild(triangle)
                let msgUl = document.createElement('ul')
                msgUl.className = 'common-head-msg-list panel'
                res.data.msgList.forEach(m => {
                    let msgLi = document.createElement('li')
                    msgLi.innerHTML = '<div class="msg-title">' + m.title + '</div><div class="msg-time">' + m.createTime + '</div>'
                    msgLi.addEventListener('click', function () {
                        window.location.href = Config.domain.message.fe + '/#/message/onsite?id=' + m.id
                    })
                    msgUl.appendChild(msgLi)
                })
                let msgMore = document.createElement('li')
                msgMore.innerHTML = '<a class="more" href="' + Config.domain.message.fe + '/#/message">查看更多消息</a>'
                msgUl.appendChild(msgMore)
                msg.appendChild(msgUl)
            }
        })
    }
}