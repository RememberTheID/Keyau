$(function(){
   $('.navigation>li').click(function(){
               $(this).addClass('select').siblings().removeClass('select');
               var i = $(this).index();
               $('.tabs-1>div').eq(i).css('display','block').addClass('.tabs-1>div').siblings().css('display','none');
           });
});
$(function(){
	var num;
	$('div.cut>ul>li>div.num').click(function(){
		 num=parseInt($(this).html());
		$.ajax({
			url:'/productCenter',
			type:'get',
			data:{num:num},
			success:function(data){
			},
			error:function(err){}
		})
	})
})