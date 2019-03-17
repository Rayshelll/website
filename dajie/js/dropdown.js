// 下拉菜单隐藏出现
function f1(show,hide,dri) {
    var li = document.getElementById(show);
    var ul1 = document.getElementById(hide);
    var dr = document.getElementById(dri);

    li.onmouseover = function () {
        ul1.style.display ="block";
        dr.style.transform = "rotate(180deg)";
    }
    li.onmouseout = function () {
        ul1.style.display ="none";
        dr.style.transform = "rotate(0deg)";

    }
}
// 搜索框出现
function f2(){
    var t1 = document.getElementById("search");
    var t2 = document.getElementById("nav1");
    // var d1 = document.getElementById("search1");
    t2.style.display = "none";
    t1.style.display = "block";
}
// 搜索框隐藏
function f3(){
    var t1 = document.getElementById("search");
    var t2 = document.getElementById("nav1");
    t2.style.display = "block";
    t1.style.display = "none";
}

// 下拉选择
function test(obj){
    var context = obj.innerText;
    var school = document.getElementById("school");
    var text = document.getElementById("search_text");
    school.innerText = context;
    // alert(context.trim()=="职位")
    if (context.trim() == '职位'){
        text.setAttribute("placeholder","请输入职位名称");
    }
    if (context.trim() == '公司'){
        text.setAttribute("placeholder","请输入公司名称");
    }
}
