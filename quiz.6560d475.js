var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire9b7c;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire9b7c=o);var c=o("fXOuZ"),r=o("8tedJ"),s=o("icg6M");function l(){return new URLSearchParams(window.location.search).get("course")}(0,c.initializeApp)(s.firebaseConfig);const a=(0,r.getDatabase)(),i=(0,r.ref)(a,`questions/${l()}`),u=(0,r.ref)(a,"scores/"),d=(0,r.ref)(a,`courses/${l()}/scores`),m=document.getElementById("number"),g=document.getElementById("question"),f=document.getElementById("aButton");f.addEventListener("click",M);const p=document.getElementById("bButton");p.addEventListener("click",M);const y=document.getElementById("cButton");y.addEventListener("click",M);const b=document.getElementById("dButton");b.addEventListener("click",M);const h=document.createElement("a");h.className="btn btn-success",h.addEventListener("click",w),h.href=`exploration.html?course=${l()}`,h.innerHTML="Submit";const E=document.createElement("a");E.className="btn btn-success",E.addEventListener("click",w),E.href="survey.html",E.innerHTML="Submit & go to survey",document.getElementById("pageTitle").innerHTML=`${l().replace(/_/g," ")} Quiz`;var k,L=0,v={};function B(e){return e=(e=e.replace(/</g,"&lt;")).replace(/>/g,"&gt;;")}function T(){if(Object.keys(k).length<L+1)!function(){let e=document.getElementById("quiz-box"),t=document.getElementById("info-box"),n=document.getElementById("scores-box");document.getElementById("info-footer");document.getElementById("submit-button-container").append(h,E);let o=Object.keys(v).reduce(((e,t)=>v[e]>v[t]?e:t)),c=Object.keys(v).reduce(((e,t)=>v[e]<v[t]?e:t)),r=Object.values(v).reduce(((e,t)=>e+t),0),s=document.createElement("p");s.className="h5",s.innerHTML=`Your total score is ${r} out of ${Object.keys(k).length}.`,n.append(s);for(let e of Object.keys(v)){let t=document.createElement("p");t.className="info-line",t.innerHTML=`<span style="font-weight:Bold;"> ${v[e]} </span> in ${e} `,n.append(t)}let l=document.createElement("p");l.className="mt-2",l.innerHTML=o==c&&o<=0?"You scored 0 in all tracks questions, try again.":o==c?"You scored equally in all tracks, you're recommended to take the track that aligns with your interests.":`Recommended to take <span style="font-weight:Bold;"> ${o} </span>for this course.`;n.append(l),e.hidden=!0,t.hidden=!1}();else{const{choices:e,question:t}=k[L],{a:n,b:o,c:c,d:r}=e;m.innerHTML=L+1,g.innerHTML=`${B(t)}`,f.innerHTML=`${B(n)}`,p.innerHTML=`${B(o)}`,y.innerHTML=`${B(c)}`,b.innerHTML=`${B(r)}`}}function M(e){const{correctchoice:t,track:n}=k[L];e.target.value===t?O(n,!0):O(n,!1),L++,T()}function O(e,t){v[e]=t?v[e]+1||1:v[e]||0,console.log(t),console.log(v)}function w(){const e=new Date;let t,n=`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`;console.log(n);let o=document.getElementById("userName");t=0!=o.value.length?o.value:"Anon",console.log(t);let c=l().replace(/_/g," "),s=Object.keys(k).length,a=Object.keys(v).reduce(((e,t)=>v[e]>v[t]?e:t)),i=Object.values(v).reduce(((e,t)=>e+t),0);(0,r.push)(u,{username:t,date:n,course:c,quizlength:s,totalscore:i,tracksscores:v,recommendation:a}),(0,r.push)(d,{username:t,date:n,course:c,quizlength:s,totalscore:i,tracksscores:v,recommendation:a})}$(document).ready((function(){(0,r.onValue)(i,(e=>{k=e.toJSON(),T()}))}));
//# sourceMappingURL=quiz.6560d475.js.map
