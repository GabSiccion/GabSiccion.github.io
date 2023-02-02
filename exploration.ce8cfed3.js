var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequire9b7c;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var r={id:t,exports:{}};return e[t]=r,a.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,e){n[t]=e},t.parcelRequire9b7c=a);var r=a("fXOuZ"),l=a("8tedJ"),c=a("icg6M");class o extends HTMLElement{connectedCallback(){this.innerHTML='\n      <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav" >\n\t\t\t<div class="container">\n\t\t\t\t<a href="#" class="navbar-brand mb-0 h1"> CourseExplorer </a>\n\n\t\t\t\t<button\n\t\t\t\t\ttype="button"\n\t\t\t\t\tclass="navbar-toggler"\n\t\t\t\t\tdata-bs-target="#navbarNav"\n\t\t\t\t\tdata-bs-toggle="collapse"\n\t\t\t\t\taria-controls="navbarNav"\n\t\t\t\t\taria-expanded="false"\n\t\t\t\t\taria-label="Toggle navigation"\n\t\t\t\t>\n\t\t\t\t\t<span class="navbar-toggler-icon"></span>\n\t\t\t\t</button>\n\n\t\t\t\t<div class="collapse navbar-collapse" id="navbarNav">\n\t\t\t\t\t<ul class="navbar-nav">\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="index.html" class="nav-link"> Home </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active dropdown">\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass="nav-link dropdown-toggle"\n\t\t\t\t\t\t\t\tid="navbarDropdown"\n\t\t\t\t\t\t\t\trole="button"\n\t\t\t\t\t\t\t\tdata-bs-toggle="dropdown"\n\t\t\t\t\t\t\t\taria-expanded="false"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tCourses\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\t\tid="dropdown-menu"\n\t\t\t\t\t\t\t\tclass="dropdown-menu"\n\t\t\t\t\t\t\t\taria-labelledby="navbarDropdown"\n\t\t\t\t\t\t\t></ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="about.html" class="nav-link"> About </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="survey.html" class="nav-link"> Survey </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n    '}}customElements.define("main-header",o);(0,r.initializeApp)(c.firebaseConfig);const s=(0,l.getDatabase)(),i=(0,l.ref)(s,"courses/"),d=new URLSearchParams(window.location.search).get("course");var m;(0,l.onValue)(i,(t=>{m=t.toJSON();var e=document.getElementById("dropdown-menu");e.innerHTML="";for(let t in m){let n=document.createElement("li"),a=document.createElement("a"),{courseName:r}=m[t];a.className="dropdown-item",a.href=`exploration.html?course=${r.replace(/\s+/g,"_")}`,a.innerHTML=r,n.appendChild(a),e.appendChild(n)}let{courseName:n,courseText:a,courseTracks:r}=m[d];console.log(`${n} ${a}`);let l=document.getElementById("content-box");l.innerHTML="";let c=document.createElement("div");c.className="container pt-4 pb-4";let o=document.createElement("h1");o.innerHTML=n;let s=document.createElement("p");s.innerHTML=a;let i=document.createElement("div");i.className="course-container",i.append(o,s);let p=document.createElement("a");p.href=`quiz.html?course=${d}`,p.innerHTML="Start Quiz",p.className="btn btn-dark ml-4",document.getElementById("explorationJumbotron").append(p),c.append(i);for(let t in r){let{trackName:e,trackText:n,trackTopics:a,trackCareers:l}=r[t],o=document.createElement("h2");o.innerHTML=e;let s=document.createElement("p");s.innerHTML=n;let i=document.createElement("h3");i.innerHTML="Track Topics";let d=document.createElement("div");d.className="card-container overflow-auto mb-4";var u=Object.keys(a);for(let t in a){let{topicPowerpoint:e,topicText:n}=a[t],r=document.createElement("div");r.className="card m-1";let l=document.createElement("div");l.className="card-body";let c=document.createElement("p");c.className="card-title fw-bold",c.innerHTML=u[t];let o=document.createElement("p");o.className="card-text",o.innerHTML=n;let s=document.createElement("a");s.className="btn btn-success",s.role="button",s.href=e,s.innerHTML="View topics and lessons",s.target="_blank",l.append(c,o,s),r.append(l),d.append(r)}let m=document.createElement("h3");m.innerHTML="Career Options";let p=document.createElement("div");p.className="career-container mb-4";var v=Object.keys(l);for(let t in l){let{careerText:e,careerSalary:n}=l[t],a=document.createElement("div");a.className="career-card";let r=document.createElement("p");r.innerHTML=`<span class="career-name">${v[t]}</span>`;let c=document.createElement("p");c.innerHTML=e;let o=document.createElement("p");o.innerHTML=`<span class="career-salary">${n}</span> median salary per year of a ${v[t]}`,a.append(r,c,o),p.append(a)}let b=document.createElement("div");b.className="track-container",b.append(o,s,i,d,m,p),c.append(b)}l.append(c)}));
//# sourceMappingURL=exploration.ce8cfed3.js.map
