import courseData from "./coursedata.json" assert { type: "json" };

//Displays select options of courses in navbar.
$(document).ready(function () {
	let ul = document.getElementById("dropdown-menu");

	for (var obj in courseData["Courses"]) {
		let li = document.createElement("li");
		let a = document.createElement("a");
		a.className = "dropdown-item";
		a.href = "exploration.html?course=" + courseData["Courses"][obj]["id"];
		a.innerHTML = courseData["Courses"][obj]["header-text"];

		li.appendChild(a);
		ul.appendChild(li);
	}
});
