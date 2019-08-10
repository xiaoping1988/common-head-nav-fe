import {listHeadNavTree} from './api'
export default {
    init: function () {
        console.log('init menu ...')
        listHeadNavTree().then(res => {
            if (res.code === 0) {
                let menuContainer = document.getElementById("commonHeadMenu")
                res.data.forEach(m1 => {
                    let li = document.createElement("li")
                    let a = document.createElement("a")
                    if (m1.url) {
                        a.href = m1.url
                    } else {
                        a.href = "javascript:void(0)"
                    }
                    if (m1.openType === 2) {
                        a.target = '_blank'
                    }
                    a.innerHTML = "<span>" + m1.name + "</span>"
                    if (m1.flag) {
                        a.innerHTML = a.innerHTML + "<span class='highlight-flag'>" + m1.flag + "</span>"
                    }
                    li.appendChild(a)
                    if (m1.children && m1.children.length) {
                        let triangle = document.createElement("div")
                        triangle.className = 'common-head-triangle'
                        li.appendChild(triangle)
                        let ul2 = document.createElement("ul")
                        ul2.className = 'common-head-second-nav panel'
                        m1.children.forEach(m2 => {
                            let li2 = document.createElement("li")
                            let a2 = document.createElement("a")
                            if (m2.url) {
                                a2.href = m2.url
                            } else {
                                a2.href = "javascript:void(0)"
                            }
                            if (m2.openType === 2) {
                                a2.target = '_blank'
                            }
                            a2.innerHTML = "<span>" + m2.name + "</span>"
                            if (m2.flag) {
                                a2.innerHTML = a2.innerHTML + "<span class='highlight-flag'>" + m2.flag + "</span>"
                            }
                            li2.appendChild(a2)
                            ul2.appendChild(li2)
                        })
                        // ul2.style.left
                        li.appendChild(ul2)
                    }
                    li.addEventListener('mouseover', function () {
                        li.classList.add('active')
                        let ul2 = li.querySelector('.common-head-second-nav')
                        ul2.style.left = (li.clientWidth - ul2.clientWidth) / 2 + 'px'
                    })
                    li.addEventListener('mouseout', function () {
                        li.classList.remove('active')
                    })
                    menuContainer.appendChild(li)
                })
            }
        })
    }
}