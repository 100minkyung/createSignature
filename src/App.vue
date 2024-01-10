<template>
  <div>
    <h1>메일 서명 생성</h1>
    <div class="valueForm">
      <label for="name">이름 : </label>
      <input type="text" id="name" v-model="name">
      <hr>
      <label for="position">직책 : </label>
      <input type="text" id="position" v-model="position">
      <hr>
      <label for="rank">직급 : </label>
      <input type="text" id="rank" v-model="rank">
      <hr>
      <label for="team">부서 : </label>
      <input type="text" id="team" v-model="team">
      <hr>
      <label for="number">번호 : </label>
      <input type="text" id="number" v-model="number">
      <hr>
      <label for="fax">팩스 : </label>
      <input type="text" id="fax" v-model="fax">
      <hr>
      <label for="pn">휴대폰번호 : </label>
      <input type="text" id="pn" v-model="pn">
      <hr>
      <button @click="done">입력완료</button>
    </div>
    <div class="result">
      <div class="table">
        <table style="padding: 0; border: none; background: #FFFFFF; font-size: 11pt;">
          <tr>
            <td cellspacing="0" cellpadding="0">
              <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">{{이름}}</span>
              <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">{{직책}}</span><span style="display: inline-block; width: 0.06em;"></span><span style="display: inline-block; width: 0.25em; height: 0.25em; background-color: #E01728;"></span>
            </td>
          </tr>
          <tr style="height: 1.13em;">
            <td cellspacing="0" cellpadding="0">
              <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; vertical-align: middle; line-height: 150%;">{{직급}}</span>
              <span style="display: inline-block; width: 0.19em; height: 0.19em; background-color: #BBBBBB; vertical-align: middle; border-radius: 100px;"></span>
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
              <img src="../../logo.png" title="logo" alt="logo" width="100%" height="auto" style="display: block;">
            </td>
          </tr>
        </table>
      </div>
      <div class="code">
        <h2>여기에 나오는 코드를 복사해주세요</h2>
      </div>
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
const 직책 = ref()
const 직급 = ref()
const 부서 = ref()
const 번호 = ref()
const 팩스 = ref()
const 휴대폰번호 = ref()

const done = () => {
  이름.value = name.value
  직책.value = position.value
  직급.value = rank.value
  부서.value = team.value
  번호.value = number.value
  팩스.value = fax.value
  휴대폰번호.value = pn.value

  const code = `
  아래 코드를 복사해주세요\n
  <table style="padding: 0; border: none; background: #FFFFFF; font-size: 11pt;">\n<tr>\n
      <td cellspacing="0" cellpadding="0">\n
        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${이름.value}</span>\n
        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${직책.value}</span><span style="display: inline-block; width: 0.06em;"></span><span style="display: inline-block; width: 0.25em; height: 0.25em; background-color: #E01728;"></span>\n
      </td>\n
    </tr>\n
    <tr style="height: 1.13em;">\n
      <td cellspacing="0" cellpadding="0">\n
        <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; vertical-align: middle; line-height: 150%;">${직급.value}</span>\n
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
  document.querySelector('.code').innerText = code
}
</script>

<style>
.valueForm{
  padding: 16px;
}
.result{
  margin-top: 24px;
  padding: 16px;
}
.table{
  margin-bottom: 24px;
}
</style>
