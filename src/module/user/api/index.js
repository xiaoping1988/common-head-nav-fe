import {get} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.auth.be + '/api/user'

export const ApiUrls = {
    getLoginUser: ApiPre + '/current-login', // 查询导航树
    refreshUserAuth: ApiPre + '/refresh-auth' // 刷新权限
}

/**
 * 获取登录用户
 * @returns {*}
 */
export const getLoginUser = () => { return get(ApiUrls.getLoginUser) }

/**
 * 刷新登录用户权限
 */
export const refreshUserAuth = () => { return get(ApiUrls.refreshUserAuth) }
