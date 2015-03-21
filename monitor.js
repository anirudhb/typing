var s = "why does judd travers kill his dogs. do you think it is correct, or not.";
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

function monitor() {
    fillIn();
    highlightLetter(0);
    index = 0;
    letter = s.charAt(index);
    highlightLetter(index);
    errCount = 0;
    $("body").keypress(function (e) {
        if (index < s.length) {
            if (String.fromCharCode(e.charCode) == letter) {
                errCount = 0;
                index += 1;
                highlightLetter(index);
                finishLetter(index-1);
                letter = s.charAt(index);
            }
            else {
                if (errCount < 1) {
                    errCount += 1;
                    index += 1;
                    highlightLetter(index);
                    wrongLetter(index-1);
                    letter = s.charAt(index);
                }
            }
        }
    });
}
