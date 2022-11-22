import courseData from "./coursedata.json" assert { type: "json" };

function getSelectedCourse() {
	let parameter = new URLSearchParams(window.location.search);
	return parameter.get("course");
}

$(document).ready(function () {
	//Displays Course Info
	let course = getSelectedCourse();

	for (let obj in courseData["Courses"]) {
		let found = false;
		if (courseData["Courses"][obj]["id"] == course) {
			$("#header-text").text(courseData["Courses"][obj]["header-text"]);
			$("#article-text").text(courseData["Courses"][obj]["article-text"]);
			found = true;
			for (let obj2 in courseData["Courses"][obj]["tracks"]) {
				let track = document.createElement("p");
				track.className = "display-4";
				track.innerHTML =
					courseData["Courses"][obj]["tracks"][obj2]["track-name"];

				let text = document.createElement("p");
				text.style = "font-size: 1.2rem";
				text.innerHTML =
					courseData["Courses"][obj]["tracks"][obj2]["track-text"];

				let pptcontainer = document.createElement("div");
				pptcontainer.id = "ppt-container";
				let width = document.getElementById("content-box").offsetWidth;
				let height = width / 1.8;

				let frame = document.createElement("iframe");
				frame.src = courseData["Courses"][obj]["tracks"][obj2]["track-ppt"];
				frame.width = width + "px";
				frame.height = height + "px";
				pptcontainer.appendChild(frame);

				$("#content-box").append(track);
				$("#content-box").append(text);
				$("#content-box").append(pptcontainer);
			}
		}
	}
	//Display Track Info
});

//Displays course data in track/exploration page.
function displayCourse() {
	let course = getSelectedCourse();

	document.getElementById("header-text").innerHTML =
		courseData["Courses"][course]["header-text"];

	document.getElementById("article-text").innerHTML =
		courseData["Courses"][course]["article-text"];

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

	frame.src = courseData["Courses"][course]["powerpoint-src"][y];
	frame.width = width + "px";
	frame.height = height + "px";

	document.getElementById("ppt-container").appendChild(frame);
}
