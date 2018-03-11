var s = ""; // The string that will be shown. Must be less than 300 characters
var url = ""; // Must be non-empty and using the http protocol or https.
var dev = "This is the text that will be typed."; // Replace in developement if you want.
if (url) {
	// Open a new XMLHttpRequest to the url, get the text, and put it in s if non-empty.
	var req = new XMLHttpRequest();
	req.open("GET", url, false);
	req.send();
	var t = req.responseText;
	if (t) {
		s = t;
	}
}
// Else, put dev into s. (Development only)
if (!s) {
	s = dev;
}
// Strip s of spaces.
s = s.trim();
function genHTML() {
	// Get the output element, template code, and loop variable.
    out = $("div#content");
    html = "<p class='nolines'>";
    ix = 0;
    for (ixx=0;ixx<10;ixx++) {
        if (ixx+1 == 5) {
            html += "<p class='last'>";
        }
        else {
            html += "<p>";
        }
        for (i=0;i<30;i++) {
            html += "<span class='"+((i+ix).toString())+"'></span>";
            if (i==29) {
                ix += 30;
            }
        }
        html += "</p>";
    }
    html += "</p>";
    out.html(html);
}
function fillIn() {
    for (i=0;i<s.length;i++) {
        // alert("span.".concat(i.toString()));
        $("span.".concat(i.toString())).html(s.charAt(i));
        // alert(s.charAt(i));
    }
}
function highlightLetter(index) {
    var html = $("span.".concat(index.toString()));
    html.attr("class", index.toString());
    html.addClass("current");
}
function wrongLetter(index) {
    var html = $("span.".concat(index.toString()));
    html.attr("class", index.toString());
    html.addClass("incorrect");
}
function finishLetter(index) {

    var html = $("span.".concat(index.toString()));
    html.attr("class", index.toString());
    html.addClass("finished");
}
function backLetter(index) {
    var html = $("span.".concat(index.toString()));
    html.attr("class", index.toString());
    highlightLetter(index-1);
}

function monitor() {
    genHTML();
    fillIn();
    highlightLetter(0);
    index = 0;
    letter = s.charAt(index);
    highlightLetter(index);
    errCount = 0;
    countErr = 0;
    correctCount = 0;
    $(document).keyup(function (e) {
        if (index < s.length) {
            e.preventDefault();
            var k = e.code;
            if (k == letter) {
                errCount = 0;
                index++;
                highlightLetter(index);
                finishLetter(index-1);
                letter = s.charAt(index);
                correctCount++;
            }
            else {
                if (errCount < 1) {
                    errCount += 1;
                    index += 1;
                    highlightLetter(index);
                    wrongLetter(index-1);
                    letter = s.charAt(index);
                }
                countErr += 1;
            }
	    if (index == s.length-1 && !(k == "Backspace" || k == "Delete")) {
		    index++;
	    }
        if (k == "Backspace" || k == "Delete") {
                if (errCount) {
                    errCount--;
                }
                backLetter(index);
                index--;
            }
            return false;
        }
        else {
            alert("Done!\nIncorrect:"+countErr.toString()+"\nCorrect:"+correctCount.toString(), "Results");
        }
    });
}
