import {get} from '../../../axios'
import config from '../../../config'

const ApiPre = config.domain.message.be + '/api'

export const ApiUrls = {
    getLingDangData: ApiPre + '/lingdang' // 铃铛下展现的消息及未读数量等
}

/**
 * 铃铛下展现的消息及未读数量等
 * @returns {*}
 */
export const getLingDangData = () => { return get(ApiUrls.getLingDangData) }
