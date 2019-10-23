<?php
defined('HOST') or die ('not access');
$paths = '/webmain/pages/mention/';
?>
    <title>点名系统</title>

    <link rel="stylesheet" href="<?=$paths?>css/main.css">

    <script type="text/javascript">
        $(document).ready(function () {
            debugger;
            var isokimg     = "<?=$paths?>img/is_ok.png";
            var notokimg    = "<?=$paths?>img/not_ok.png";
            js.importjs("<?=$paths?>js/main.js");
        });
    </script>
    <script type="text/javascript" src="<?=$paths?>js/main.js"></script>
    <div id="roll_call">
    <div class="call_tittle">点名系统</div>
    <div class="col-md-8 call_main">
        <div class="row">
            <div class="left_down">
                <div class="row">
                    <div class="blackboard">
                        <div class="whiteFont">教师讲台</div>
                    </div>
                </div>

                <div class="row" v-for="i in long">
                    <a href="#" class="people" v-for="j in hori" :id="getID(j,i)">
                        <img class="img" src="<?=$paths?>img/is_ok.png" alt="">
                        <p :stu_id="0" style="text-indent: 0">(空座位)</p>
                    </a>
                </div>

            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div id="dm_time">
            <div id="time_Show"></div>
            <div id="day_Show"></div>
        </div>
        <div id="dm_zrs">
                <div class="col-md-5">总人数：</div>
                <div class="col-md-7" id="all"></div>
        </div>
        <div id="dm_yd">
            <div class="col-md-5">已到人数：</div>
            <div class="col-md-7" id="dao"></div>
        </div>
        <div id="dm_qq">
            <div class="col-md-5">缺勤人数：</div>
            <div class="col-md-7" id="que"></div>
        </div>
        <div id="zy_select">
            <span style="font-size: 20px;font-weight: 600;">专业：</span>
            <select name="" id="profession_select" onchange="select_more()">
                <option value="">无</option>
                <option value="jw">计算机网络</option>
                <option value="jk">计算机科学与技术</option>
                <option value="qrs">嵌入式技术与应用</option>
                <option value="xa">信息安全</option>
            </select>
        </div>
        <div id="bj_select">
            <span style="font-size: 20px;font-weight: 600;">班级：</span>
            <select name="" id="class_select" onchange="select_teacher()"></select>
        </div>
        <div id="kc_select">
            <span style="font-size: 20px;font-weight: 600;">课程：</span>
            <select name="" id="course_select" onchange="select_teacher()"></select>
        </div>
        <div id="ls_select">
            <span style="font-size: 20px;font-weight: 600;">老师：</span>
            <select name="" id="teacher_select">
                <option value="">李雷</option>
                <option value="">韩梅梅</option>
                <option value="">夏洛</option>
                <option value="">马冬梅</option>
                <option value="">王老师</option>
            </select>
        </div>
    </div>
</div>