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
                    userNameCn: '三上',
                    headPic: ''
                }
            }
            return user
            // return null
        })

        Mock.get(mock, '刷新登录用户的权限', ApiUrls.refreshUserAuth, function () {
            return true
        })
    }
}
