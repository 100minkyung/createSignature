<template>
  <div class="wrap">
    <h1>THE 51 메일 서명 생성</h1>
    <div class="valueForm">
      <div class="input_wrap">
        <label for="name">이름</label>
        <input type="text" id="name" v-model="name" placeholder="ex) 홍길동">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="position">직위</label>
        <input type="text" id="position" v-model="position" placeholder="ex) 사원">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="rank">직책</label>
        <input type="text" id="rank" v-model="rank" placeholder="ex) 팀원">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="team">부서</label>
        <input type="text" id="team" v-model="team" placeholder="ex) DT Group">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="number">번호</label>
        <input type="text" id="number" v-model="number" placeholder="ex) 02.000.0000">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="fax">팩스</label>
        <input type="text" id="fax" v-model="fax" placeholder="ex) 02.000.0000">
      </div>
      <hr>
      <div class="input_wrap">
        <label for="pn">휴대폰번호</label>
        <input type="text" id="pn" v-model="pn" placeholder="ex) 010.0000.0000">
      </div>
      <hr>
      <div class="input_wrap">
        <button @click="[done(), popup()]">입력완료</button>
      </div>
    </div>
    <hr>
    <div class="result">
      <h2>미리보기</h2>
      <div class="table">
        <table style="padding: 0; border: none; background: #FFFFFF; font-size: 11pt;">
          <tr>
            <td cellspacing="0" cellpadding="0">
              <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000; display: inline-block; padding-right: 4px;">{{이름}}</span>
              <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">{{직위}}</span><span style="display: inline-block; width: 0.06em;"></span><span style="display: inline-block; width: 0.25em; height: 0.25em; background-color: #E01728;"></span>
            </td>
          </tr>
          <tr style="height: 1.13em;">
            <td cellspacing="0" cellpadding="0">
              <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; vertical-align: middle; line-height: 150%;">{{직책}}</span>
              <span style="display: inline-block; width: 0.19em; height: 0.19em; background-color: #BBBBBB; vertical-align: middle; border-radius: 100px; display: inline-block; margin: 0 4px;"></span>
              <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: 'Tahoma'; vertical-align: middle; line-height: 150%;">{{부서}}</span>
            </td>
          </tr>
          <tr style="height: 1.63em; width: 100%;">
            <td>
              <table style="width: 100%; font-size: 11pt;">
                <tr>
                  <td style="width: 33.3%;" cellspacing="0" cellpadding="0">
                    <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">T.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">{{번호}}</span>
                  </td>
                  <td style="width: 33.3%;" cellspacing="0" cellpadding="0">
                    <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">F.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">{{팩스}}</span>
                  </td>
                  <td style="width: 33.3%;" cellspacing="0" cellpadding="0">
                    <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">M.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">{{휴대폰번호}}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0;" cellspacing="0" cellpadding="0">
              <img src="../src/assets/logo.png" title="logo" alt="logo" width="100%" height="auto" style="display: block;">
            </td>
          </tr>
        </table>
      </div>
    </div>
    <hr>
    <div class="guide">
      <h2>서명 설정 방법</h2>
      <img src="../src/assets/guide.png">
    </div>
    <div class="popup">
      코드 복사 완료<br>하단 설정 방법을 따라 서명을 등록해주세요
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const position = ref('')
const rank = ref('')
const team = ref('')
const number = ref('')
const fax = ref('')
const pn = ref('')

const 이름 = ref()
const 직위 = ref()
const 직책 = ref()
const 부서 = ref()
const 번호 = ref()
const 팩스 = ref()
const 휴대폰번호 = ref()

const done = () => {
  이름.value = name.value
  직위.value = position.value
  직책.value = rank.value
  부서.value = team.value
  번호.value = number.value
  팩스.value = fax.value
  휴대폰번호.value = pn.value

  const code = `
  <table style="padding: 0; border: none; background: #FFFFFF; font-size: 11pt;">\n<tr>\n
      <td cellspacing="0" cellpadding="0">\n
        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${이름.value}</span>\n
        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${직위.value}</span><span style="display: inline-block; width: 0.06em;"></span><span style="display: inline-block; width: 0.25em; height: 0.25em; background-color: #E01728;"></span>\n
      </td>\n
    </tr>\n
    <tr style="height: 1.13em;">\n
      <td cellspacing="0" cellpadding="0">\n
        <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; vertical-align: middle; line-height: 150%;">${직책.value}</span>\n
        <span style="display: inline-block; width: 0.19em; height: 0.19em; background-color: #BBBBBB; vertical-align: middle; border-radius: 100px;"></span>\n
        <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: 'Tahoma'; vertical-align: middle; line-height: 150%;">${부서.value}</span>\n
      </td>\n
    </tr>\n
    <tr style="height: 1.63em; width: 100%;">\n
      <td>\n
        <table style="width: 100%; font-size: 11pt;">\n
          <tr>\n
            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n
              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">T.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${번호.value}</span>\n
            </td>\n
            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n
              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">F.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${팩스.value}</span>\n
            </td>\n
            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n
              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">M.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${휴대폰번호.value}</span>\n
            </td>\n
          </tr>\n
        </table>\n
      </td>\n
    </tr>\n
    <tr>\n
      <td style="padding: 0;" cellspacing="0" cellpadding="0">\n
        <img src="../../logo.png" title="logo" alt="logo" width="100%" height="auto" style="display: block;">\n
      </td>\n
    </tr>\n
  </table>`

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(code);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  copyContent()
}
const popup = () => {
  const popup = document.querySelector('.popup')
  popup.style.display = 'block'
  setTimeout(() => {
    popup.style.display = 'none'
  }, 5000);
}
</script>

<style>
.wrap {
  width: 800px;
  margin: 0 auto;
}
h1, h2 {
  text-align: center;
}
.valueForm {
  margin-top: 40px;
}
.input_wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
}
input {
  appearance: none;
  width: 83%;
  padding: 8px;
  border: 1px solid gray;
  border-radius: 6px;
}
button {
  appearance: none;
  border: none;
  border-radius: 8px;
  background: #E01728;
  color: white;
  width: 100%;
  height: 34px;
}
.result {
  margin-top: 24px;
}
.table {
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 36px;
}
.guide img {
  width: 100%;
}
.popup {
  display: none;
  position: fixed;
  bottom: 24px;
  width: 768px;
  background: #ffccd0;
  padding: 16px;
  text-align: center;
  border-radius: 16px;
  animation: popup 5s ease-in-out;
}
@keyframes popup {
  0% { opacity: 0; bottom: -75px;}
  15% { opacity: 1; bottom: 24px;}
  85% { opacity: 1; bottom: 24px;}
  100% { opacity: 0; bottom: -75px;}
}
</style>
