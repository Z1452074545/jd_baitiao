var modai = document.querySelector('.modai');
var title_right = document.querySelector('.title_right');
var modai_txt = document.querySelector('.modai_cont p');
var modai_code = document.querySelector('.modai_code');
var but_left = document.querySelector('.but_left');
var but_right = document.querySelector('.but_right');
var but_get_code = document.querySelector('.but_get_code');
but_get_code.onclick = function() {
    modai.style.display = "block";
}
title_right.onclick = function() {
    var flag = false;
    var car_code = document.querySelector('.title_left input').value;
    var code_img = 'imags/jd_bg_01.png';
    if (flag == true) {
        modai_code.className = "modai_code modai_code_win";
        modai_code.innerHTML = `<img src="${code_img}" alt="">`;
        modai_txt.innerHTML = "生成成功，到检测站出示二维码使用";

    } else {
        modai_txt.innerHTML = "检车券券码错误，请重新输入";
    }
}
but_left.onclick = function() {
    modai.style.display = "none";
}
but_right.onclick = function() {
    modai.style.display = "none";
}