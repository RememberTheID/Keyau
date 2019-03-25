$(function(){
		// Tab切换
	$('ul.navLayer li').click(function(){
		var num = $(this).index();
		$('div.pageCount a').hide();
		$('div.articleList ul').eq(num+1).addClass('active').siblings().removeClass('active');
		$(this).children().addClass('change').parent().siblings().children().removeClass('change');

	})
	// console.log(result);

	// 总页数
	var num = parseInt($('div.pageCount span:last-child').html());
	// console.log(num);

	// 获取页数显示的div
	var pageCount = $('div.pageCount');

	// 刚加载时显示的内容
	var ul = $('div.articleList ul:first-child');

	// 根据页数创建对应的a链接
	for(var i = 1 ; i <= num; i++){
		var A = $('<a href="javascript:void(0)">'+ i +'</a>');
		// console.log(A);
		pageCount.append(A); 
		
	}
	// console.log(ul);

	$.ajax({
		url:'/newCenter',
		type:'post',
		data:{
			page:1,
			limit:10
		},
		success:function(data){
			// console.log(data.length); 
			// $('div.pageCount a:first-child').addClass('current');
			for(var i = 0;i<data.length;i++){
				var li = $('<li class="mess"></li>');
				ul.append(li);
				var act = $('<a href="javascript:void(0)" class="test"></a>')
				var p = $('<p></p>');
				var text = data[i].time.slice(0,10);
				act.html(data[i].message);
				p.html(text);
				li.append(act);
				li.append(p);

			}
		},
		error:function(err){
				if(err)return console.error(err);
		}
	})
	$('div.pageCount a:nth-child(3)').addClass('current');
	// 点击页数显示对应内容
	
	// console.log(li)
	$('div.pageCount a').on('click',function(){
		var page = parseInt($(this).html());
		// console.log(page);
		$(this).addClass('current').siblings().removeClass('current');
		$('div.articleList ul:first-child li.mess').empty();
		var li = $('div.articleList ul:first-child').children('.mess');
		// console.log(li);
		$.ajax({
			url:'/newCenter',
			type:'post',
			data:{
				page:page,
				limit:10
			},
			success:function(data){
				// console.log(data.length); 
				for(var i = 0;i<data.length;i++){
					var act = $('<a href="javascript:void(0)">1111</a>')[0];
					var p = document.createElement('p');
					li[i].append(act);
					li[i].append(p);
					var text = data[i].time.slice(0,10);
					console.log(text);
					act.innerHTML=data[i].message;			
					p.innerHTML=text;
					
				}
			},
			error:function(err){
					if(err)return console.error(err);
			}
		})
	})
})
