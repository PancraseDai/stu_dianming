$(function () {
    var path = '/webmain/pages/mention/';
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
    init_desk(8,8);

    var isActive = false;
    var stu = '';
    var num = 0;


    var selectId = $("#val_select").val();
    $.post("Url",{selectId},function(data){
        var lalala = data;//约定
    });


    //var lalala=new Array();
    var lalala=[{name:"曾榆峰",stu_id:"G450902200107011239"},{name:"陈柏健",stu_id:"G450902200105176099"},{name:"高广铭",stu_id:"G450981200202172335"},{name:"霍运豪",stu_id:"G450902200104048036"},{name:"李仕材",stu_id:"G450902200209236551"},{name:"李宗键",stu_id:"G450981200011185491"},{name:"梁柏漫",stu_id:"G450924200106127158"},{name:"李彬梅",stu_id:"G450981200108171723"},{name:"李玉婷",stu_id:"G450981200009151727"},{name:"李珍青",stu_id:"G450981200203241742"},{name:"覃秋霞",stu_id:"G450981200202111727"},{name:"秦秉君",stu_id:"G450923200101200532"},{name:"李铭鸿",stu_id:"L450900200110229431"},{name:"谭莎莎",stu_id:"G45098120020612172X"},{name:"张崇靖",stu_id:"G450902199911302736"},{name:"冯昌锐",stu_id:"G450923200201015414"},{name:"李丹",stu_id:"G450981200108031720"},{name:"梁诗敏",stu_id:"G450981200001276023"},{name:"林海森",stu_id:"G450981200103151715"},{name:"龙诗来",stu_id:"G450981200108124791"},{name:"丘春景",stu_id:"G450922200004102942"},{name:"唐世龙",stu_id:"G441881200009045338"},{name:"莫夏菊",stu_id:"L450900200209279426"},{name:"梁寿淞",stu_id:"G450922200110092936"},{name:"刘千瑜",stu_id:"G450902199910090946"},{name:"陈彩兰",stu_id:"G450981200303161125"},{name:"刘仪婷",stu_id:"G450923200008286482"}];

    function initStudent(){
        var stu_total_num = lalala.length;
        var dsk_total_num = $(".people").length;
        var act_num = Math.min(stu_total_num,dsk_total_num);
        for (var i=0;i<act_num;i++){
            var cur = $(".people")[i];
            
            cur.children[1].setAttribute('stu_id',lalala[i].stu_id);
            cur.children[1].innerHTML=lalala[i].name;
        }
    }


    //初始化学生数据
    initStudent();



    document.getElementById('all').innerHTML = lalala.length;
    document.getElementById('dao').innerHTML = lalala.length - num;
    document.getElementById('que').innerHTML = num;
    $(".people").click(function(obj) {
        /*var stuID = this.children[1].getAttribute('stu_id');//js的写法*/
        var stuID = $(this).children('p').attr('stu_id');//jq的写法
        if (stuID==0) {
            return;
        }else{
            this.isActive=!this.isActive;
            if(this.isActive){
                num = num+1;
                this.stu = obj.id;
                this.children[0].src = path+"img/not_ok.png"
                document.getElementById('dao').innerHTML = lalala.length-num;
                document.getElementById('que').innerHTML = num;
            }else{
                if (this.stu !== obj.id){
                    num = num+1;
                    this.isActive=!this.isActive;
                    this.children[0].src = path+"img/not_ok.png";
                    document.getElementById('dao').innerHTML = lalala.length - num;
                    document.getElementById('que').innerHTML = num;
                }else{
                    num = num-1;
                    this.children[0].src = path+"img/is_ok.png";
                    document.getElementById('dao').innerHTML = lalala.length - num;
                    document.getElementById('que').innerHTML = num;
                }
            }
        }
        /* Act on the event */
    });

});
    var kc={
        'jw':[
            {'jw_eng':"计算机英语"},
            {'jw_db':"数据库"},
            {'jw_bianyi':"编译原理"},
            {'jw_web':"web设计"},
            {'jw_php':"PHP程序设计"}
        ],
        'jk':[
            {'jk_eng':"计算机英语"},
            {'jk_bianyi':"编译原理"},
            {'jk_c':"C语言"},
            {'jk_sf':"算法分析"},
            {'jk_ps':"PS"}
        ],
        'qrs':[
            {'qrs_eng':"计算机英语"},
            {'qrs_bianyi':"编译原理"},
            {'qrs_java':"JAVA"},
            {'qrs_sf':"算法分析"},
            {'qrs_dpj':"单片机"}
        ],
        'xa':[
            {'xa_eng':"计算机英语"},
            {'xa_sf':"算法分析"},
            {'xa_st':"渗透测试"},
            {'xa_fhq':"防火墙"},
            {'xa_bianyi':"编译原理"}
        ]
    };
    var bj={
        'jw':[
            {'engtea':'计算机网络一班'},
            {'jw_2':'计算机网络二班'},
            {'jw_3':'计算机网络三班'},
        ],
        'jk':[
            {'jk_1':'计算机科学与技术一班'},
            {'jk_2':'计算机科学与技术二班'},
            {'jk_3':'计算机科学与技术三班'}
        ],
        'qrs':[
            {'qrs_1':'嵌入式技术与应用一班'},
            {'qrs_2':'嵌入式技术与应用二班'}
        ],
        'xa':[
            {'xa_1':'信息技术与安全一班'},
        ]
    };
    var teacher_name={
        'jw':[
            {'eng_teacher':"英语老师"},
            {'db_teacher':"数据库老师"},
            {'bianyi_teacher':"编译原理老师"},
            {'web_teacher':"web设计老师"},
            {'php_teacher':"PHP程序设计老师"}
        ],
        'jk':[
            {'jk_eng':"计算机英语"},
            {'jk_bianyi':"编译原理"},
            {'jk_c':"C语言"},
            {'jk_sf':"算法分析"},
            {'jk_ps':"PS"}
        ],
        'qrs':[
            {'qrs_eng':"计算机英语"},
            {'qrs_bianyi':"编译原理"},
            {'qrs_java':"JAVA"},
            {'qrs_sf':"算法分析"},
            {'qrs_dpj':"单片机"}
        ],
        'xa':[
            {'xa_eng':"计算机英语"},
            {'xa_sf':"算法分析"},
            {'xa_st':"渗透测试"},
            {'xa_fhq':"防火墙"},
            {'xa_bianyi':"编译原理"}
        ]
    };
    function select_more(){
        var value=$("#profession_select").val();
        //kc[value];
        //bj[value];
        var kc_options = '';
        //课程
        for (var i=0; i<kc[value].length; i++){
            for (var key in kc[value][i]){
                kc_options += "<option value=" + key +">"+ kc[value][i][key] +"</option>";
            }    
        }
        $("#course_select").html(kc_options);
        //班级
        var bj_options = '';
        for (var i=0; i<bj[value].length; i++){
            for (var key in bj[value][i]){
                bj_options += "<option value=" + key +">"+ bj[value][i][key] +"</option>";
            }    
        }
        $("#class_select").html(bj_options);
    }