import Mock from '../../../mock'
import {ApiUrls} from '../api'


export default {
    bootstrap (mock) {
        Mock.post(mock, '头部搜索框触发搜索', ApiUrls.headSearch, function (params) {
            return [
                {
                    title: '数据可视化',
                    url: 'https://xiaoping1988.github.io/#/data-visual'
                },
                {
                    title: '权限中心',
                    url: 'https://xiaoping1988.github.io/#/auth'
                },
                {
                    title: '大屏 可视化',
                    url: 'https://xiaoping1988.github.io/#/message'
                }
            ]
        })
    }
}
