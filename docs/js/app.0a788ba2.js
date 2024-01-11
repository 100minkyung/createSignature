(function(){"use strict";var n={129:function(n,e,l){var t=l(963),i=l(252),a=l(577),o="data:image/png;base64,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",r=l(262);const c=(0,i._)("h1",null,"메일 서명 생성",-1),s={class:"valueForm"},p=(0,i._)("label",{for:"name"},"이름 : ",-1),d=(0,i._)("hr",null,null,-1),h=(0,i._)("label",{for:"position"},"직책 : ",-1),u=(0,i._)("hr",null,null,-1),f=(0,i._)("label",{for:"rank"},"직급 : ",-1),g=(0,i._)("hr",null,null,-1),y=(0,i._)("label",{for:"team"},"부서 : ",-1),m=(0,i._)("hr",null,null,-1),v=(0,i._)("label",{for:"number"},"번호 : ",-1),w=(0,i._)("hr",null,null,-1),A=(0,i._)("label",{for:"fax"},"팩스 : ",-1),z=(0,i._)("hr",null,null,-1),M=(0,i._)("label",{for:"pn"},"휴대폰번호 : ",-1),b=(0,i._)("hr",null,null,-1),x={class:"result"},k={class:"table"},D={style:{padding:"0",border:"none",background:"#FFFFFF","font-size":"11pt"}},G={cellspacing:"0",cellpadding:"0"},H={style:{"font-size":"1.13em","font-weight":"700","font-family":"'맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'","line-height":"150%",color:"#000000"}},T={style:{"font-size":"1.13em","font-weight":"700","font-family":"'맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'","line-height":"150%",color:"#000000"}},J=(0,i._)("span",{style:{display:"inline-block",width:"0.06em"}},null,-1),X=(0,i._)("span",{style:{display:"inline-block",width:"0.25em",height:"0.25em","background-color":"#E01728"}},null,-1),O={style:{height:"1.13em"}},Y={cellspacing:"0",cellpadding:"0"},B={style:{"font-size":"0.69em","font-weight":"400",color:"#575757","font-family":"'맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'","vertical-align":"middle","line-height":"150%"}},j=(0,i._)("span",{style:{display:"inline-block",width:"0.19em",height:"0.19em","background-color":"#BBBBBB","vertical-align":"middle","border-radius":"100px"}},null,-1),P={style:{"font-size":"0.69em","font-weight":"400",color:"#575757","font-family":"'Tahoma'","vertical-align":"middle","line-height":"150%"}},S={style:{height:"1.63em",width:"100%"}},U={style:{width:"100%","font-size":"11pt"}},L={style:{width:"33.3%"},cellspacing:"0",cellpadding:"0"},K=(0,i._)("span",{style:{"font-size":"0.75em","font-weight":"700",color:"#E01728","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%"}},"T.",-1),I={style:{"font-size":"0.75em","font-weight":"700","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%",color:"#000000"}},R={style:{width:"33.3%"},cellspacing:"0",cellpadding:"0"},V=(0,i._)("span",{style:{"font-size":"0.75em","font-weight":"700",color:"#E01728","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%"}},"F.",-1),E={style:{"font-size":"0.75em","font-weight":"700","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%",color:"#000000"}},Z={style:{width:"33.3%"},cellspacing:"0",cellpadding:"0"},F=(0,i._)("span",{style:{"font-size":"0.75em","font-weight":"700",color:"#E01728","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%"}},"M.",-1),q={style:{"font-size":"0.75em","font-weight":"700","font-family":"'Tahoma'","vertical-align":"top","line-height":"150%",color:"#000000"}},N=(0,i._)("tr",null,[(0,i._)("td",{style:{padding:"0"},cellspacing:"0",cellpadding:"0"},[(0,i._)("img",{src:o,title:"logo",alt:"logo",width:"100%",height:"auto",style:{display:"block"}})])],-1),W=(0,i._)("div",{class:"code"},[(0,i._)("h2",null,"여기에 나오는 코드를 복사해주세요")],-1);var C={__name:"App",setup(n){const e=(0,r.iH)(""),l=(0,r.iH)(""),o=(0,r.iH)(""),C=(0,r.iH)(""),_=(0,r.iH)(""),Q=(0,r.iH)(""),$=(0,r.iH)(""),nn=(0,r.iH)(),en=(0,r.iH)(),ln=(0,r.iH)(),tn=(0,r.iH)(),an=(0,r.iH)(),on=(0,r.iH)(),rn=(0,r.iH)(),cn=()=>{nn.value=e.value,en.value=l.value,ln.value=o.value,tn.value=C.value,an.value=_.value,on.value=Q.value,rn.value=$.value;const n=`\n  아래 코드를 복사해주세요\n\n  <table style="padding: 0; border: none; background: #FFFFFF; font-size: 11pt;">\n<tr>\n\n      <td cellspacing="0" cellpadding="0">\n\n        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${nn.value}</span>\n\n        <span style="font-size: 1.13em; font-weight: 700; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; line-height: 150%; color: #000000;">${en.value}</span><span style="display: inline-block; width: 0.06em;"></span><span style="display: inline-block; width: 0.25em; height: 0.25em; background-color: #E01728;"></span>\n\n      </td>\n\n    </tr>\n\n    <tr style="height: 1.13em;">\n\n      <td cellspacing="0" cellpadding="0">\n\n        <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: '맑은고딕', '나눔고딕', 'MS Gothic', 'AppleGothic'; vertical-align: middle; line-height: 150%;">${ln.value}</span>\n\n        <span style="display: inline-block; width: 0.19em; height: 0.19em; background-color: #BBBBBB; vertical-align: middle; border-radius: 100px;"></span>\n\n        <span style="font-size: 0.69em; font-weight: 400; color: #575757; font-family: 'Tahoma'; vertical-align: middle; line-height: 150%;">${tn.value}</span>\n\n      </td>\n\n    </tr>\n\n    <tr style="height: 1.63em; width: 100%;">\n\n      <td>\n\n        <table style="width: 100%; font-size: 11pt;">\n\n          <tr>\n\n            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n\n              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">T.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${an.value}</span>\n\n            </td>\n\n            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n\n              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">F.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${on.value}</span>\n\n            </td>\n\n            <td style="width: 33.3%;" cellspacing="0" cellpadding="0">\n\n              <span style="font-size: 0.75em; font-weight: 700; color: #E01728; font-family: 'Tahoma'; vertical-align: top; line-height: 150%;">M.</span>&nbsp;<span style="font-size: 0.75em; font-weight: 700; font-family: 'Tahoma'; vertical-align: top; line-height: 150%; color: #000000;">${rn.value}</span>\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </td>\n\n    </tr>\n\n    <tr>\n\n      <td style="padding: 0;" cellspacing="0" cellpadding="0">\n\n        <img src="../../logo.png" title="logo" alt="logo" width="100%" height="auto" style="display: block;">\n\n      </td>\n\n    </tr>\n\n  </table>`;document.querySelector(".code").innerText=n};return(n,r)=>((0,i.wg)(),(0,i.iD)("div",null,[c,(0,i._)("div",s,[p,(0,i.wy)((0,i._)("input",{type:"text",id:"name","onUpdate:modelValue":r[0]||(r[0]=n=>e.value=n)},null,512),[[t.nr,e.value]]),d,h,(0,i.wy)((0,i._)("input",{type:"text",id:"position","onUpdate:modelValue":r[1]||(r[1]=n=>l.value=n)},null,512),[[t.nr,l.value]]),u,f,(0,i.wy)((0,i._)("input",{type:"text",id:"rank","onUpdate:modelValue":r[2]||(r[2]=n=>o.value=n)},null,512),[[t.nr,o.value]]),g,y,(0,i.wy)((0,i._)("input",{type:"text",id:"team","onUpdate:modelValue":r[3]||(r[3]=n=>C.value=n)},null,512),[[t.nr,C.value]]),m,v,(0,i.wy)((0,i._)("input",{type:"text",id:"number","onUpdate:modelValue":r[4]||(r[4]=n=>_.value=n)},null,512),[[t.nr,_.value]]),w,A,(0,i.wy)((0,i._)("input",{type:"text",id:"fax","onUpdate:modelValue":r[5]||(r[5]=n=>Q.value=n)},null,512),[[t.nr,Q.value]]),z,M,(0,i.wy)((0,i._)("input",{type:"text",id:"pn","onUpdate:modelValue":r[6]||(r[6]=n=>$.value=n)},null,512),[[t.nr,$.value]]),b,(0,i._)("button",{onClick:cn},"입력완료")]),(0,i._)("div",x,[(0,i._)("div",k,[(0,i._)("table",D,[(0,i._)("tr",null,[(0,i._)("td",G,[(0,i._)("span",H,(0,a.zw)(nn.value),1),(0,i._)("span",T,(0,a.zw)(en.value),1),J,X])]),(0,i._)("tr",O,[(0,i._)("td",Y,[(0,i._)("span",B,(0,a.zw)(ln.value),1),j,(0,i._)("span",P,(0,a.zw)(tn.value),1)])]),(0,i._)("tr",S,[(0,i._)("td",null,[(0,i._)("table",U,[(0,i._)("tr",null,[(0,i._)("td",L,[K,(0,i.Uk)(" "),(0,i._)("span",I,(0,a.zw)(an.value),1)]),(0,i._)("td",R,[V,(0,i.Uk)(" "),(0,i._)("span",E,(0,a.zw)(on.value),1)]),(0,i._)("td",Z,[F,(0,i.Uk)(" "),(0,i._)("span",q,(0,a.zw)(rn.value),1)])])])])]),N])]),W])]))}};const _=C;var Q=_;(0,t.ri)(Q).mount("#app")}},e={};function l(t){var i=e[t];if(void 0!==i)return i.exports;var a=e[t]={exports:{}};return n[t](a,a.exports,l),a.exports}l.m=n,function(){var n=[];l.O=function(e,t,i,a){if(!t){var o=1/0;for(p=0;p<n.length;p++){t=n[p][0],i=n[p][1],a=n[p][2];for(var r=!0,c=0;c<t.length;c++)(!1&a||o>=a)&&Object.keys(l.O).every((function(n){return l.O[n](t[c])}))?t.splice(c--,1):(r=!1,a<o&&(o=a));if(r){n.splice(p--,1);var s=i();void 0!==s&&(e=s)}}return e}a=a||0;for(var p=n.length;p>0&&n[p-1][2]>a;p--)n[p]=n[p-1];n[p]=[t,i,a]}}(),function(){l.d=function(n,e){for(var t in e)l.o(e,t)&&!l.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};l.O.j=function(e){return 0===n[e]};var e=function(e,t){var i,a,o=t[0],r=t[1],c=t[2],s=0;if(o.some((function(e){return 0!==n[e]}))){for(i in r)l.o(r,i)&&(l.m[i]=r[i]);if(c)var p=c(l)}for(e&&e(t);s<o.length;s++)a=o[s],l.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return l.O(p)},t=self["webpackChunkmail_vue"]=self["webpackChunkmail_vue"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(129)}));t=l.O(t)})();
//# sourceMappingURL=app.0a788ba2.js.map