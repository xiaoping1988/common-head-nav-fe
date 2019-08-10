import Mock from './mock'
import Axios from './axios'
import NavCss from './css/index.css'
import Module from './module'

(function () {
    Mock.bootstrap()
    window.HeadNav = Module
    window.HeadNav.init()
}())