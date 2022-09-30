import courseData from "./coursedata.json" assert { type: "json" };

function getSelectedCourse() {
	let parameter = new URLSearchParams(window.location.search);
	return parameter.get("course");
}

function displayCourse() {
	let course = getSelectedCourse();

	document.getElementById("header-text").innerHTML =
		courseData[course]["header-text"];

	document.getElementById("article-text").innerHTML =
		courseData[course]["article-text"];
}

window.onload = displayCourse;
