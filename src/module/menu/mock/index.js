import Mock from '../../../mock'
import {ApiUrls} from '../api'
const domain = "http://localhost:8080/#"

export default {
    bootstrap (mock) {
        Mock.get(mock, '获取头部导航树', ApiUrls.listNavTree, function () {
            return [
                {
                    name: '基础服务',
                    url: '',
                    openType: 2,
                    flag: '',
                    children: [
                        {
                            name: '权限中心',
                            url: domain + '/auth',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: '消息中心',
                            url: domain + '/message',
                            openType: 2,
                            flag: 'NEW'
                        },
                        {
                            name: '搜索中心',
                            url: domain + '/search',
                            openType: 2,
                            flag: ''
                        }
                    ]
                },
                {
                    name: '数据建设',
                    url: 'https://www.baidu.com',
                    openType: 1,
                    flag: 'HOT',
                    children: [
                        {
                            name: '数据体系',
                            url: 'https://www.baidu.com',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: '数据治理',
                            url: 'https://www.baidu.com',
                            openType: 2,
                            flag: 'NEW'
                        },
                        {
                            name: '统一元数据',
                            url: 'https://www.baidu.com',
                            openType: 2,
                            flag: ''
                        }
                    ]
                },
                {
                    name: '数据服务',
                    url: '',
                    openType: 1,
                    flag: 'NEW',
                    children: [
                        {
                            name: '数据地图',
                            url: domain + '/data-map',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: '数据API',
                            url: 'https://www.baidu.com',
                            openType: 2,
                            flag: 'NEW'
                        }
                    ]
                },
                {
                    name: '数据应用',
                    url: '',
                    openType: 1,
                    flag: 'NEW',
                    children: [
                        {
                            name: '数据可视化',
                            url: domain + '/data-visual',
                            openType: 2,
                            flag: 'HOT'
                        }
                    ]
                }
            ]
        })
    }
}
