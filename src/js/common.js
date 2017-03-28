/**
 * 菜单&搜索显示隐藏
 */

$('.header_lt button[data-ui-toggleClass]').on('click',function(){

    var targetArr = $(this).attr('data-target').split(' ');
    var classArr = $(this).attr('data-ui-toggleClass').split(' ');

    for(var i=0; i<targetArr.length; i++){
       $(targetArr[i]).toggleClass(classArr[i]);
    }

});





















/*
天气插件调用
 */
/*;$(function() {
    $('#weather').leoweather({
        format: '<i class="icon-{图标}">{夜间气温}℃-{白天气温}℃</i>' + '<p>{城市}<span> | </span>{天气}<span> | </span>{风向}{风级}级</p>' + '<p>{年}/{月}/{日}<span> | </span>周{周}</p>'
    });
})*/

/**
 * swiper插件
 */
/*;$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        effect: 'fade',
        speed: 1000,
        loop: true,
        autoplay: 5000,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        //nextButton: '.swiper-button-next',
        //prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        //scrollbar: '.swiper-scrollbar',
    })
})*/


