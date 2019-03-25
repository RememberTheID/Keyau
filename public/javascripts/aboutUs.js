$(function(){
	// 小导航点击事件
	$('.deClick').click(function(){
		// console.log('ss')
		$('.develop').removeClass("display").siblings().addClass("display");
		$(this).children().addClass("back").parent().siblings().children().removeClass("back");
	})
	$('.syClick').click(function(){
		$('.synopsis').removeClass("display").siblings().addClass("display");
		$(this).children().addClass("back").parent().siblings().children().removeClass("back");
	})
})