import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')

$square.on('click', ()=>{
    $square.toggleClass('active')
    // toggleClass 如果有就删掉，没有就添加
})