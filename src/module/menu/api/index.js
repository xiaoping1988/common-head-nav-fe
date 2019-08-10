import {get} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.commonNav.be + '/api/head'

export const ApiUrls = {
    listNavTree: ApiPre + '/list-nav-tree' // 查询导航树
}

/**
 * 查询导航树
 * @returns {*}
 */
export const listHeadNavTree = () => { return get(ApiUrls.listNavTree) }
