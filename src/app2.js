import './app2.css'
import $ from "jquery"
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget)
    // target是获取你点击的目标，currentTarget是获取全部里面的第一个
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index()
    console.log(index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
    // 不要用.show、.hide、.css,
    // 应该使用.addClass('active')、removeClass('active')
});

$tabBar.children().eq(0).trigger('click')
// trigger触发、自动触发children的第一个