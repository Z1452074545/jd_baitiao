var modai = document.querySelector('.modai');
var title_right = document.querySelector('.title_right');
var modai_txt = document.querySelector('.modai_cont p');
var modai_code = document.querySelector('.modai_code');
var but_get_code = document.querySelector('.but_get_code');
var bottom_but = document.querySelector('.bottom_but');
var data = {
    "title": ''
}
but_get_code.onclick = function() {
    modai.style.display = "block";
}
title_right.onclick = function() {
    var flag = 1111;
    var car_code = document.querySelector('.title_left input').value;
    var code_img = 'imags/jd_bg_01.png';
    if (flag == car_code) {
        modai_code.className = "modai_code modai_code_win";
        modai_code.innerHTML = `<img src="${code_img}" alt="">`;
        modai_txt.innerHTML = "生成成功，到检测站出示二维码使用";

    } else {
        modai_code.className = "modai_code modai_code_failed";
        modai_code.innerHTML = ``;
        modai_txt.innerHTML = "检车券券码错误，请重新输入";
    }
}
bottom_but.onclick = function() {
    modai.style.display = "none";
}