var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},e=t.parcelRequire9b7c;null==e&&((e=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var l={id:t,exports:{}};return n[t]=l,e.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,n){a[t]=n},t.parcelRequire9b7c=e);var l=e("fXOuZ"),r=e("8tedJ"),o=e("icg6M");class i extends HTMLElement{connectedCallback(){this.innerHTML='\n      <nav class="navbar navbar-expand-sm navbar-light bg-light" id="nav" >\n\t\t\t<div class="container">\n\t\t\t\t<a href="#" class="navbar-brand mb-0 h1"> CourseExplorer </a>\n\n\t\t\t\t<button\n\t\t\t\t\ttype="button"\n\t\t\t\t\tclass="navbar-toggler"\n\t\t\t\t\tdata-bs-target="#navbarNav"\n\t\t\t\t\tdata-bs-toggle="collapse"\n\t\t\t\t\taria-controls="navbarNav"\n\t\t\t\t\taria-expanded="false"\n\t\t\t\t\taria-label="Toggle navigation"\n\t\t\t\t>\n\t\t\t\t\t<span class="navbar-toggler-icon"></span>\n\t\t\t\t</button>\n\n\t\t\t\t<div class="collapse navbar-collapse" id="navbarNav">\n\t\t\t\t\t<ul class="navbar-nav">\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="index.html" class="nav-link"> Home </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active dropdown">\n\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\tclass="nav-link dropdown-toggle"\n\t\t\t\t\t\t\t\tid="navbarDropdown"\n\t\t\t\t\t\t\t\trole="button"\n\t\t\t\t\t\t\t\tdata-bs-toggle="dropdown"\n\t\t\t\t\t\t\t\taria-expanded="false"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\tCourses\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<ul\n\t\t\t\t\t\t\t\tid="dropdown-menu"\n\t\t\t\t\t\t\t\tclass="dropdown-menu"\n\t\t\t\t\t\t\t\taria-labelledby="navbarDropdown"\n\t\t\t\t\t\t\t></ul>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="about.html" class="nav-link"> About </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class="nav-item active">\n\t\t\t\t\t\t\t<a href="survey.html" class="nav-link"> Survey </a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n    '}}customElements.define("main-header",i);(0,l.initializeApp)(o.firebaseConfig);const s=(0,r.getDatabase)(),d=(0,r.ref)(s,"courses/");(0,r.onValue)(d,(t=>{const n=t.toJSON();var a=document.getElementById("dropdown-menu");a.innerHTML="";for(let t in n){let e=document.createElement("li"),l=document.createElement("a"),{courseName:r}=n[t];l.className="dropdown-item",l.href=`exploration.html?course=${r.replace(/\s+/g,"_")}`,l.innerHTML=r,e.appendChild(l),a.appendChild(e)}}));
//# sourceMappingURL=index.4cfa1adb.js.map
