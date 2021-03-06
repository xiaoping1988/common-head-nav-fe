import Mock from '../../../mock'
import {ApiUrls} from '../api'
const domain = "https://xiaoping1988.github.io/index.html#"

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
                    url: '',
                    openType: 1,
                    flag: 'HOT',
                    children: [
                        {
                            name: '数据体系',
                            url: domain + '/data-system',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: '数据治理',
                            url: 'https://www.baidu.com',
                            openType: 2,
                            flag: 'NEW'
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
                            name: '指标体系',
                            url: domain + '/index-system',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: '数据API',
                            url: domain + '/data-api',
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
                },
                {
                    name: '个人应用',
                    url: '',
                    openType: 1,
                    flag: 'HOT',
                    children: [
                        {
                            name: '博客',
                            url: 'https://blog.csdn.net/xiaoping_1988',
                            openType: 2,
                            flag: 'HOT'
                        },
                        {
                            name: 'GitHub',
                            url: 'https://github.com/xiaoping1988',
                            openType: 2,
                            flag: 'HOT'
                        }
                    ]
                }
            ]
        })
    }
}
