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

	let frame = document.createElement("iframe");

	let y;
	if (course == "Computer-Science") {
		y = 1;
	} else {
		y = 0;
	}

	let container = document.getElementById("ppt-container");
	let width = container.offsetWidth;
	let height = width / 1.8;

	frame.src = courseData[course]["powerpoint-src"][y];
	frame.width = width + "px";
	frame.height = height + "px";

	document.getElementById("ppt-container").appendChild(frame);
}

window.onload = displayCourse;
