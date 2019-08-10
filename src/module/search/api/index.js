import {get, post} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.search.be + '/api/search'

export const ApiUrls = {
    headSearch: ApiPre + '/head' // 查询导航树
}

/**
 * 头部搜索框触发搜索
 * @returns {*}
 */
export const headSearch = (params) => { return post(ApiUrls.headSearch, params) }
