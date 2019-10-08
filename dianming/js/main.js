$(function () {
    /*时间*/
    var t=null;
    t=setTimeout(time,1000);   //设置定时器，一秒刷新一次
    function time(){
        clearTimeout(t);  //清楚定时器
        dt=new Date();
        var y=dt.getYear()+1900;
        var m=dt.getMonth()+1;
        var d=dt.getDate();
        var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
        var day=dt.getDay();
        var h=dt.getHours();
        var min=dt.getMinutes();
        var s=dt.getSeconds();
        if(h<10){
            h="0"+h;
        }
        if(min<10){
            min="0"+min;
        }
        if(s<10){
            s="0"+s;
        }
        document.getElementById("time_Show").innerHTML=  h + ":" + min + ":" + s + "";
        t = setTimeout(time, 1000);
        document.getElementById("day_Show").innerHTML= y + "年" + m + "月" + d + "日" + weekday[day] + "";
        t = setTimeout(time, 1000);
    }
    /*时间*/

    function init_desk(x,y){
        var vm=new Vue({
            el:'.call_main',
            data: {
                isActive: false,
                hori: x,
                long: y,
            },
            methods:{
                getID: function (index1,index2) {
                    return "id_"+index1+index2
                }
            }
        });
    }

    //初始化桌子的列和行
    init_desk(12,10);

    var isActive = false;
    var stu = '';
    var num = 0;

    document.getElementById('all').innerHTML = $(".col-md-1").length;
    document.getElementById('dao').innerHTML = num;
    document.getElementById('que').innerHTML = $(".col-md-1").length - num;
    $(".col-md-1").click(function(obj) {
        /* Act on the event */
        this.isActive=!this.isActive;
                if(this.isActive){
                    num = num+1;
                    this.stu = obj.id;
                    this.children[0].src = "img/is_ok.png"
                    document.getElementById('dao').innerHTML = num;
                    document.getElementById('que').innerHTML = $(".col-md-1").length - num;
                }else{
                    if (this.stu !== obj.id){
                        num = num+1;
                        this.isActive=!this.isActive;
                        this.children[0].src = "img/is_ok.png"
                        document.getElementById('dao').innerHTML = num;
                        document.getElementById('que').innerHTML = $(".col-md-1").length - num;
                    }else{
                        num = num-1;
                        this.children[0].src = "img/not_ok.png"
                        document.getElementById('dao').innerHTML = num;
                        document.getElementById('que').innerHTML = $(".col-md-1").length - num;
                    }
                }
    });



    //var lalala=new Array();
    var lalala=[{name:"张三1",stu_id:"20161815305001"},{name:"张三2",stu_id:"20161815305002"},{name:"张三3",stu_id:"20161815305001"},{name:"张三4",stu_id:"20161815305001"},{name:"张三5",stu_id:"20161815305001"},{name:"张三6",stu_id:"20161815305001"},{name:"张三7",stu_id:"20161815305001"},{name:"张三8",stu_id:"20161815305001"},{name:"张三9",stu_id:"20161815305001"},{name:"张三10",stu_id:"20161815305001"},{name:"张三11",stu_id:"20161815305001"},{name:"张三12",stu_id:"20161815305001"},{name:"张三13",stu_id:"20161815305001"},{name:"张三14",stu_id:"20161815305001"},{name:"张三15",stu_id:"20161815305001"},{name:"张三16",stu_id:"20161815305001"},{name:"张三17",stu_id:"20161815305001"},{name:"张三18",stu_id:"20161815305001"},{name:"张三19",stu_id:"20161815305001"},{name:"张三20",stu_id:"20161815305001"},{name:"张三21",stu_id:"20161815305001"},{name:"张三22",stu_id:"20161815305001"},{name:"张三23",stu_id:"20161815305001"},{name:"张三24",stu_id:"20161815305001"},{name:"张三25",stu_id:"20161815305001"},{name:"张三26",stu_id:"20161815305001"},{name:"张三27",stu_id:"20161815305001"}];

    function initStudent(){
        var stu_total_num = lalala.length;
        var dsk_total_num = $(".col-md-1").length;
        var act_num = Math.min(stu_total_num,dsk_total_num);
        for (var i=0;i<act_num;i++){
            var cur = $(".col-md-1")[i];
            debugger;
            cur.children[1].setAttribute('stu_id',lalala[i].stu_id);
            cur.children[1].innerHTML=lalala[i].name;
        }
    }


    //初始化学生数据
    initStudent();

});

