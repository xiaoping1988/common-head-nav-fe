import Mock from '../../../mock'
import {ApiUrls} from '../api'


export default {
    bootstrap (mock) {
        Mock.get(mock, '获取登录用户', ApiUrls.getLoginUser, function () {
            let user = localStorage.getItem('dg_user')
            if (user) {
                user = JSON.parse(user)
            } else {
                user = {
                    userName: 'admin',
                    userNameCn: '三上悠亚'
                }
            }
            return user
            // return null
        })

        Mock.get(mock, '退出登录', ApiUrls.logout, function () {
            return true
        })
    }
}
