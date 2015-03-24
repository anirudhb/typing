var s = prompt("What do you want to type? (max 300 chars)", "");
var j = null;
function genHTML() {
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
    html.addClass("finsihed");
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
    $(document).keypress(function (e) {
        if (index < s.length) {
            if (String.fromCharCode(e.charCode) == letter) {
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
            if (e.charCode == 8 || e.charCode == 46 || e.charCode == 35) {
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
