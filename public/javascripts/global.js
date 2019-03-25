// 移动端导航栏
$(function(){
     $('span.menu').click(function(){
        // 判断语句  如果绑定事件的执行元素的高度为0 像素，点击  其高度变为100%(>0px)
            if($('div.phone').css('height')==0+'px'){
                $('div.phone').css('height','100%')
            }
        // 判断语句  如果绑定事件的执行元素的高度大于1像素时候，点击  其高度变为0(0px)
            if($('div.phone').css('height')>=1+'px'){
                $('div.phone').css('height','0%')
            }
        })
})
$(function(){
    $('div.top_up').click(function(){
        $('body,html').animate({scrollTop:0},400);
    })
})
