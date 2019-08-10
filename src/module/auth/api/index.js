import {get, post} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.auth.be + '/api'

export const ApiUrls = {
    refreshUserAuth: ApiPre + '/refresh-auth' // 刷新权限
}

/**
 * 刷新用户权限,不传参就刷新当前登录用户的权限
 */
export const refreshUserAuth = (params) => { return post(ApiUrls.refreshUserAuth, params) }
