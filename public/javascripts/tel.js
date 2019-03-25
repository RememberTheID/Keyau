// 移动端导航栏
$(function(){
     $('span.glyphicon').click(function(){
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
// 高德地图
$(function(){
    var scale = new AMap.Scale({
        visible: false
    }),
    toolBar = new AMap.ToolBar({
        visible: false
    }),
    overView = new AMap.OverView({
        visible: false
    }),
    map = new AMap.Map('container', {
        // 地图经纬度
    center: [113.7010260000,23.0252080000],
    layers: [//只显示默认图层的时候，layers可以缺省
        new AMap.TileLayer()//高德默认标准图层
    ],
    zoom: 18
    });
    // 创建一个 Marker 实例：
    var marker = new AMap.Marker({
        position: new AMap.LngLat(113.7010260000,23.0252080000),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '东莞'
    });
    // 将创建的点标记添加到已有的地图实例：
    map.add(marker);
    map.addControl(scale);
    map.addControl(toolBar);
    map.addControl(overView);
    scale.show();
    showToolBar();
    showToolBarDirection();
    function showToolBar() {
        document.getElementById('toolbar').checked = true;
        document.getElementById('toolbarDirection').disabled = false;
        document.getElementById('toolbarRuler').disabled = false;
        toolBar.show();
    }
    function hideToolBar() {
        document.getElementById('toolbar').checked = false;
        document.getElementById('toolbarDirection').disabled = true;
        document.getElementById('toolbarRuler').disabled = true;
        toolBar.hide();
    }
    function showToolBarDirection() {
        document.getElementById('toolbarDirection').checked = true;
        toolBar.showDirection();
    }
})
// form表单验证
$(function(){
    var flag=false;
    $('#name').blur(function(){
        $('p.user').css('display','none');
        var user=$(this).val();
        if(user!=''){
            flag=true;
        }else{
            $('p.user').css('display','block');
            flag=false;
        }
    })
    $("form").submit(function(){
        var tel=$('#global').val();
        var depict=$('#depict').val();
        if(flag){
            $.ajax({
            type: "POST",
            url: "/tel",
            data:{
                    user:$('#name').val(),
                    tel:$('#global').val(),
                    depict:$('#depict').val(),
                },
            success:function(data){
                if(data=='1'){
                        alert("你好，感谢您对keyau的信任,我们的客服会第一时间联系您!")
                }
            },
            error:function(err){
                if(err) return console.log(err)
            }
        });
        }  
    });
})
$(function(){
    $('div.top_up').click(function(){
        $('body,html').animate({scrollTop:0},400);
    })
})