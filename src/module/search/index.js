import Config from '../../config'
import {headSearch} from './api'
export default {
    init: function () {
        console.log('init search ...')
        let search = document.getElementById('commonHeadSearch')
        let input = document.createElement('input')
        input.placeholder = '报表可视化'
        input.className = 'common-head-search'
        input.addEventListener('focus', function () {
            search.classList.add('active')
        })
        input.addEventListener('blur', function (e) {
            setTimeout(function () {
                input.value = ''
                let dropdown = document.getElementById('commonHeadSearchDropdown')
                dropdown.innerHTML = ''
                search.classList.remove('active')
            }, 250)
        })
        input.addEventListener('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault()
                window.location.href = Config.domain.search.fe + '/#/search?keyword=' + input.value
            }
        })
        let searchObj = this
        input.addEventListener('input', function (e) {
            searchObj.search(input.value)
        })
        search.appendChild(input)
        let icon = document.createElement('div')
        icon.className = 'common-head-search-icon'
        search.appendChild(icon)
        let dropDown = document.createElement('ul')
        dropDown.className = 'common-head-search-dropdown panel'
        dropDown.id = 'commonHeadSearchDropdown'
        search.appendChild(dropDown)
    },
    data: {
      reqId: 0
    },
    search: function (keyword) {
        if (keyword === '' || keyword.trim() === '') {
            return
        }
        console.log('search key ' + keyword);
        let searchObj = this
        searchObj.data.reqId += 1
        let curReqId = searchObj.data.reqId
        setTimeout(function(){
            if (curReqId === searchObj.data.reqId) {
                headSearch({
                    keyword: keyword
                }).then(res => {
                    if (res.code === 0 && curReqId === searchObj.data.reqId) {
                        let dropdown = document.getElementById('commonHeadSearchDropdown')
                        dropdown.innerHTML = ''
                        res.data.forEach(d => {
                            let li = document.createElement('li')
                            li.innerHTML = '<div class="search-value">' + d.title + '</div>'
                            li.addEventListener('click', function () {
                                console.log(d.url)
                                window.location.href = d.url
                            })
                            dropdown.appendChild(li)
                        })
                    }
                })
            }
        }, 1000)

    }
}