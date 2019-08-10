import {get} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.ssoLogin.be + '/api'

export const ApiUrls = {
    getLoginUser: ApiPre + '/get-login-user', // 获取登录用户
    logout: ApiPre + '/logout' // 退出登录
}

/**
 * 获取登录用户
 * @returns {*}
 */
export const getLoginUser = () => { return get(ApiUrls.getLoginUser) }

/**
 * 退出登录
 */
export const logout = () => { return get(ApiUrls.logout) }
