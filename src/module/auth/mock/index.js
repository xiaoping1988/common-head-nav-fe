import Mock from '../../../mock'
import {ApiUrls} from '../api'


export default {
    bootstrap (mock) {
        Mock.post(mock, '刷新登录用户的权限', ApiUrls.refreshUserAuth, function () {
            return true
        })
    }
}
