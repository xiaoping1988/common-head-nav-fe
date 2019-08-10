import Mock from '../../../mock'
import {ApiUrls} from '../api'


export default {
    bootstrap (mock) {
        Mock.post(mock, '头部搜索框触发搜索', ApiUrls.headSearch, function (params) {
            return [
                {
                    title: '报表 可视化',
                    url: 'https://xiaoping1988.github.io/#/report'
                },
                {
                    title: '地图 可视化',
                    url: 'https://xiaoping1988.github.io/#/map'
                },
                {
                    title: '大屏 可视化',
                    url: 'https://xiaoping1988.github.io/#/big-screen'
                }
            ]
        })
    }
}
