$(function(){
	//十大优势鼠标移入事件
    $(".item").mouseenter(function(){
        var text=$(this).html();
        $(".item-select").stop();
        var itemLeft=$(this).offset().left-$('.item').eq(0).offset().left;
        $(".item-select").animate({
            left:itemLeft+"px"
        }).html(text);
        // 图片的移动
        var num=$(this).val()-1;
        $('.exhi ul').css('left',''-100*num+'%');
    })

    // 加盟申请表单验证
    var telFlag=false;
    var mailFlag=false;
    var name;
    var tel;
    var mail;
    var mess;
    // 姓名
    $('.name').blur(function(){
        // var name=$(this).val();
        name=$(this).val();
        if(name==''){
            $('#name').html('姓名不能为空');
        }else{
            $('#name').html('');
        }
    })
    // 电话
    $('.tel').blur(function(){
        // var tel=$(this).val();
        tel=$(this).val();
        if(tel!=''){
            var pattern=/^1[34578]\d{9}$/;
            if( pattern.test(tel) ){
                $.ajax({
                    url:'/joinUs',
                    type:'post',
                    data:{tel:tel},
                    success:function(data){
                        if(data=='0'){
                            $('#tel').html('你已提交过申请');
                            telFlag=false;
                        }else if(data=='1'){
                            telFlag=true;
                            $('#tel').html('');
                        }
                    },
                    error:function(err){
                        return console.error(err);
                    }
                })
                // telFlag=true;
                // $('#tel').html('');
            }else{
                telFlag=false;
                $('#tel').html('电话格式错误');
            }
        }else{
            telFlage=false;
            $('#tel').html('电话不能为空');
        }
    })
    // 邮箱
    $('.mail').blur(function(){
        // var mail=$(this).val();
        mail=$(this).val();
        if(mail!=''){
            var pattern=/^[a-z\d]+([._\\-]*[a-z\d])*@([a-z\d]+[a-z\d]*[a-z\d]+.){1,63}[a-z\d]+$/;
            if(pattern.test(mail)){
                mailFlag=true;
                $('#mail').html('');
            }else{
                mailFlag=false;
                $('#mail').html('邮箱格式错误');
            }
        }else{
            mailFlag=false;
            $('#mail').html('邮箱不能为空');
        }
    })
    // 留言
    $('.mess').blur(function(){
        // var mess=$(this).val();
        mess=$(this).val();
        if(mess==''){
            $('#mess').html('请简述加盟项目');
        }else{
            $('#mess').html('');
        }
    })
    // 提交
    $('#joinform').submit(function(){
        // console.log( $('.tel').val() );
        if(telFlag&&mailFlag){
            alert('提交成功');
            return true;
        }else{
            alert('提交失败');
            return false;
        }
    })

})