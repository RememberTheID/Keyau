$(function(){
   $('.navigation>li').click(function(){
               $(this).addClass('select').siblings().removeClass('select');
               var i = $(this).index();
               $('.qingchu>div').eq(i).css('display','block').addClass('.qingchu>div').siblings().css('display','none');
           });
});