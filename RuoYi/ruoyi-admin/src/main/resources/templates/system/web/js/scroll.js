
// 这里是列表滚动
window.onload = roll(30);

function roll(t) {
    var ul1 = document.getElementById("comment1");
    var ul2 = document.getElementById("comment2");
    var ulbox = document.getElementById("review_box");
    ul2.innerHTML = ul1.innerHTML;
    ulbox.scrollTop = 0; // 开始无滚动时设为0
    var timer = setInterval(rollStart, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    // 鼠标移入div时暂停滚动
    ulbox.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标移出div后继续滚动
    ulbox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}

// 开始滚动函数
function rollStart() {
    
    // 上面声明的DOM对象为局部对象需要再次声明
    var ul1 = document.getElementById("comment1");
    var ul2 = document.getElementById("comment2");
    var ulbox = document.getElementById("review_box");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    console.log(ulbox.scrollTop +"  XXXXXXX "+ ul1.scrollHeight);
    document.cookie="ulboxscrollTop="+ulbox.scrollTop ;
    console.log(document.cookie);


    if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
        
        // $.ajax({url:"http://hot.ylcgl.top/interfaceService/getBigData?customerId=101"
        //     ,async: false    
        //     ,success:function(result){
        //         debugger;
        //             if(result.code == 0){
                    
        //                 var data=result.data;
        //                 $("#comment1").empty();
        //                 $("#comment2").empty();
        //                 var tablehtml="";
        //                 console.log(data);
        //                 console.log(data.dataList.length);
                    
        //                 for(var i=0;i<data.dataList.length;i++){ //处理列表
        //                     var placeName = data.dataList[i].placeName.split("_");
        //                     var bgred=""
        //                     tablehtml=tablehtml+ "<li><div class='bg'><img src='./img/icon_bzqp.png'/><p>1级</p><p>2022-07-01 14:12:53</p><p>齿轮</p><p>齿轮破损，咬齿不合</p><p>"+data.dataList[i].createBy+"</p></div></li>"
        //                     // tablehtml=tablehtml+"<tr class='bg-color "+bgred+"'><td>"+data.dataList[i].createBy+"</td><td class='tabletd'>"+placeName[placeName.length-1]+"</td><td>"+data.dataList[i].wd+"℃</td><td>"+data.dataList[i].yl+"Mpa</td><td>"+data.dataList[i].attra2+"L/min</td></tr>"
        //                 }
                    
        //                 $("#comment1").append(tablehtml);
                
                        
        //             }else{
        //                 alert(result.msg);
        //             }
        //         }});
        // gethtml();
        console.log("comaaaa");
    } else {
        
        if (example.indexOf(ourSubstring) != -1) {
            console.log("The word Example is in the string.");
        }
        if (document.cookie.includes("ulboxscrollTop="+ulbox.scrollTop)) {
            console.log("The word Example is in the string.");
        } 
        ulbox.scrollTop++;
    }

}


function gethtml(){
    $.ajax({url:"http://hot.ylcgl.top/interfaceService/getBigData?customerId=101"
    ,async: false    
    ,success:function(result){
            if(result.code == 0){
               
                var data=result.data;
                $("#comment1").empty();
                $("#comment2").empty();
                var tablehtml="";
                console.log(data);
                console.log(data.dataList.length);
               
                for(var i=0;i<data.dataList.length;i++){ //处理列表
                    var placeName = data.dataList[i].placeName.split("_");
                    var bgred=""
                    tablehtml=tablehtml+ "<li><div class='bg'><img src='./img/icon_bzqp.png'/><p>1级</p><p>2022-07-01 14:12:53</p><p>齿轮</p><p>齿轮破损，咬齿不合</p><p>"+data.dataList[i].createBy+"</p></div></li>"
                    // tablehtml=tablehtml+"<tr class='bg-color "+bgred+"'><td>"+data.dataList[i].createBy+"</td><td class='tabletd'>"+placeName[placeName.length-1]+"</td><td>"+data.dataList[i].wd+"℃</td><td>"+data.dataList[i].yl+"Mpa</td><td>"+data.dataList[i].attra2+"L/min</td></tr>"
                }
               
                $("#comment1").append(tablehtml);
                $("#comment2").append(tablehtml);
                
            }else{
                alert(result.msg);
            }
        }});
}

// 这里是显示时间

var t = null;
    t = setTimeout(time,1000);//開始运行
    function time()
    {
       clearTimeout(t);//清除定时器
       dt = new Date();
		var y=dt.getFullYear();
		var mt=dt.getMonth()+1;
		var day=dt.getDate();
       var h=dt.getHours();//获取时
       var m=dt.getMinutes();//获取分
       var s=dt.getSeconds();//获取秒
       document.getElementById("showtime").innerHTML = y+"年"+mt+"月"+day+"日"+"-"+h+"时"+m+"分"+s+"秒";
       t = setTimeout(time,1000); //设定定时器，循环运行     
    } 
	
	