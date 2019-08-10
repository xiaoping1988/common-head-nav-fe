import Mock from '../../../mock'
import {ApiUrls} from '../api'


export default {
    bootstrap (mock) {
        Mock.get(mock, '获取铃铛下展现的消息及维度数量等', ApiUrls.getLingDangData, function () {
            return {
                unReadCount: 30,
                msgList: [
                    {
                        id: 1,
                        title: '导出excel',
                        createTime: '2019-05-18 12:01:22'
                    },
                    {
                        id: 2,
                        title: '妈妈叫你回家吃饭',
                        createTime: '2019-05-17 12:01:22'
                    },
                    {
                        id: 3,
                        title: '老婆叫你上床睡觉',
                        createTime: '2019-05-16 12:01:22'
                    },
                    {
                        id: 4,
                        title: '片子下好了',
                        createTime: '2019-05-15 12:01:22'
                    },
                    {
                        id: 5,
                        title: '三上邀请你出来玩,兴奋不兴奋',
                        createTime: '2019-05-14 12:01:22'
                    }
                ]
            }
        })
    }
}
