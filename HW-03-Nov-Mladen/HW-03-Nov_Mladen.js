

function electionPoll() {
    if (document.getElementById("choice").rbutton[0].checked) {
        alert("You have chosen DONALD TRUMP");
        document.getElementById("trump").innerHTML = "Republican Party nominee is chosen: Donald John Trump";
    }
    else if (document.getElementById("choice").rbutton[1].checked) {
        alert("You have chosen JOE BIDEN");
        document.getElementById("biden").innerHTML = "Democratic Party nominee is chosen: Joseph Robinette Biden Jr.";
/*         var x = document.querySelectorAll("div.voting");
 */
    }
    else {
        alert("please choose a President");
    }
}


