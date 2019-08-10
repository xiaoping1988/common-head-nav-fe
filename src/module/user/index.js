import Config from '../../config'
import {refreshUserAuth} from '../auth/api'
import {getLoginUser, logout} from '../sso/api'

export default {
    init: function () {
        console.log('init user ...')
        let user = document.getElementById('commonHeadUser')
        getLoginUser().then(res => {
            if (res.code === 0 && res.data) {
                let userNameCn = document.createElement('div')
                userNameCn.className = 'common-head-login-user'
                userNameCn.innerHTML = '<div class="user-icon"></div><div class="user-name-cn">' + res.data.userNameCn + '</div>'
                user.appendChild(userNameCn)
                let triangle = document.createElement("div")
                triangle.className = 'common-head-triangle'
                user.appendChild(triangle)

                let operUl = document.createElement('ul')
                operUl.className = 'common-head-user-btn panel'
                let personal = document.createElement('li')
                personal.innerHTML = '<span>个人中心</span>'
                personal.addEventListener('click', function () {
                    window.location.href = Config.domain.auth.fe + '/#/auth/console'
                })
                operUl.appendChild(personal)

                let refreshAuthBtn = document.createElement('li')
                refreshAuthBtn.innerHTML = '<span>刷新权限</span>'
                refreshAuthBtn.addEventListener('click', function () {
                    refreshUserAuth()
                })
                operUl.appendChild(refreshAuthBtn)

                let logoutBtn = document.createElement('li')
                logoutBtn.innerHTML = '<span>退出</span>'
                logoutBtn.addEventListener('click', function () {
                    logout().then(res => {
                        window.location.href = Config.domain.ssoLogin.fe + "/#/sso/login?redirect=" + encodeURIComponent(window.location.href)
                    })
                })
                operUl.appendChild(logoutBtn)

                user.appendChild(operUl)
            } else {
                let loginBtn = document.createElement('div')
                loginBtn.className = 'common-head-login-btn'
                loginBtn.innerText = '登  录'
                loginBtn.addEventListener('click', function () {
                    window.location.href = Config.domain.ssoLogin.fe + "/#/login?redirect=" + encodeURIComponent(window.location.href)
                })
                user.appendChild(loginBtn)
            }
        })
    }
}