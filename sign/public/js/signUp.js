'use strict';

const id = document.querySelector('#id');
const id_msg = document.querySelector('.id_msg');

id.addEventListener('keydown', id_check);
function id_check(){
    if(id.value.length < 4) {
        id_msg.innerHTML = `5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.`;
        id_msg.style.color = 'red';
    } else {
        id_msg.innerHTML = ``;
    }
}

const pw = document.querySelector('#pw');
const pw2 = document.querySelector('#pw2');
const pw_msg = document.querySelector('.pw_msg');
const pw2_msg = document.querySelector('.pw2_msg')
pw.addEventListener('keydown', pw_check);
function pw_check(){
    if(pw.value.length < 7) {
        pw_msg.innerHTML = `8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.`;
        pw_msg.style.color = 'red';
    } else {
        pw_msg.innerHTML = ``;
    }
}
// 수정 필요
pw2.addEventListener('keyup', pw2_check);
function pw2_check(){
    if(pw.value !== pw2.value) {
        pw2_msg.innerHTML = `비밀번호가 일치하지 않습니다`;
        pw2_msg.style.color = 'red';
    } else {
        pw_msg.innerHTML = ``;
    }
}
